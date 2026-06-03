import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Laptop Parts Finder – Find Compatible Parts for DIY Laptops",
  description: "Searchable parts database and compatibility checker for sourcing parts for DIY and open-source laptop builds. Built for hardware hackers and repair shops."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="204bbd4b-5a5f-4bc5-8bad-995b92c653fc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
