import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL ?? ""),
  keywords: ["Blogs", "Articles", "Information"],
  title: {
    default: "My Blogs",
    template: `%s | My blogs`,
  },
  description: "Use our blogs to discover various information!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 md:px-8 lg:px-32">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
