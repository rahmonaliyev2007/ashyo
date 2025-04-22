import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvide";

export const metadata: Metadata = {
  title: "Ashyo - Online Store",
  description: "An e-commerce platform for unique products",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={`antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
