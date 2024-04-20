import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "FNB Management System",
  description:
    "FNB Management System is a web application for managing your FNB business.",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
