import '@/app/globals.css'
import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Link href="/">home</Link>
          </div>
          <div>
            <Link href={"/jake"}>jake</Link>
          </div>
          <div>
            <Link href={"/counter"}>counter</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}