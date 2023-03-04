import type { AppProps } from "next/app";
import { useAnalytics } from "@happykit/analytics";

export default function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics({ publicKey: "analytics_pub_d85878e733" });
  return <Component {...pageProps} />;
}
