import '@/app/global.css';
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "People Journal",
  description: "App for awesome journaling",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <div className="max-w-7xl mx-auto px-8 py-12">
         <Providers> {children}</Providers>
       </div>
      </body>
    </html>
  );
}
