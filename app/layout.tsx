import './globals.css'
import React from "react";

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>navigation bar</div>
        {children}
      </body>
    </html>
  )
}