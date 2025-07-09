import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Modos de renderizado",
  description: "Conociendo los modos de renderizado de NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
