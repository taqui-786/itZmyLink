import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "./page";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

// Original source: https://github.com/sadmann7/skateshop/blob/main/src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://itzmylink.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - itZmyLink`,
  },
  description: siteConfig.description,
 
  // added new keywords for seo
  keywords: [
    "bitly url shortener",
    "bitly link shortener",
    "link shortener",
    "url shortener",
    "bitly link",
    "tinyurls",
    "all in one link",
    "free url shortener",
    "linknode",
    "onelink",
    "social links",
    "free linktree",
    "link in bio",
    "short my url",
    "my links",
    "itzmylink",
    "itZmyLink",
    "mtLink"
  ],
  authors: [
    {
      name: "Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Taqui imam",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen w-screen overflow-hidden ">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
  );
}
