import { Inter } from "next/font/google";
import "./globals.css";

import "./setting.fonts.css";

const inter = Inter({ subsets: ["latin"] });

import Menu from "@/components/menu/menu";

export const metadata = {
  title: "konstrukt",
  description: "by konstrukt",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
