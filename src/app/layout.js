// src/app/layout.js
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import "./globals.css";


export const metadata = {
  title: "Yamaan's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{
      margin: '0px',
      padding: '0px',
    }}>
      <body style={{
        maxWidth: '2560px',
        width: '100%',
        margin: '0px',
        padding: '0px',
      }}>{children}</body>
    </html>
  );
}
