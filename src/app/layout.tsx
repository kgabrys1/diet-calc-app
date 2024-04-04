import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reductio",
  description: "Your body mass reduction advisor app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://flowbite.com/docs/flowbite.css?v=2.3.0a" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
