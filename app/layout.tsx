import "./globals.css";
import { IBM_Plex_Sans, Open_Sans } from "next/font/google";
import {
  AnalyticsWrapper,
  SearchModal,
  ServiceWorkerWrapper,
  ThemeProviders,
} from "@/components";
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

const open_sans = Open_Sans({
  weight: ["400", "500", "600", "700"],
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
      <body className={`${open_sans.className} `}>
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
