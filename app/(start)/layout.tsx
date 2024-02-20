// RootLayout.js
"use client";
import Sidebar from "@/components/sideBar";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="UTF-8"></meta>
          <title>B2Bmatch.ch</title>
          <meta name="google" content="notranslate"></meta>
        </head>
        <body className="overflow-hidden ">
          <div className="flex w-fit">
            <Sidebar />
            
              <div className="flex-1 h-screen">{children}</div>
            
          </div>
        </body>
      </html>
    </>
  );
}
