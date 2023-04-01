import "./globals.css";
import { IBM_Plex_Sans } from "@next/font/google";
import {
  AnalyticsWrapper,
  SearchModal,
  ServiceWorkerWrapper,
  ThemeProviders,
} from "@/components";
import Script from "next/script";
import {
  transformGroupsCollection,
  transformProfessorsCollection,
} from "@/utils";
import dynamic from "next/dynamic";
import { Suspense, use } from "react";
import SwrWrapper from "@/components/wrappers/SwrWrapper/SwrWrapper";
import Loading from "./loading";

const DynamicModal = dynamic(
  () =>
    import("@/components/search/SearchModal").then(
      (modal) => modal.SearchModal
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const plex = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic-ext", "latin-ext"],
});

const getGroups = async () => {
  const response = await fetch(
    "https://eservice.omsu.ru/schedule/backend/dict/groups",
    { next: { revalidate: 180 } }
  );
  const { data } = await response.json();

  return transformGroupsCollection(data);
};

const getProfessors = async () => {
  const response = await fetch(
    "https://eservice.omsu.ru/schedule/backend/dict/tutors",
    { next: { revalidate: 180 } }
  );
  const { data } = await response.json();

  return transformProfessorsCollection(data);
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initiate both requests in parallel
  const groupsData = getGroups();
  const professorsData = getProfessors();

  // Wait for the promises to resolve
  const [groups, professors] = await Promise.all([groupsData, professorsData]);
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <title>unischedule</title>
      </head>
      <body
        className={`${plex.className} container mx-auto mb-24  px-4 md:max-w-md lg:max-w-[1600px] `}
      >
        <ServiceWorkerWrapper />
        <AnalyticsWrapper />
        <ThemeProviders data-theme defaultTheme="cmyk" enableSystem>
          <SwrWrapper
            fallback={{
              "../api/groups": groups,
              "../api/professors": professors,
            }}
            fallbackData={{ groups, professors }}
          >
            {children}
            <DynamicModal />
          </SwrWrapper>
        </ThemeProviders>
      </body>
    </html>
  );
}
