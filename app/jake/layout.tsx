import React from "react";

export default function JakeLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <div>
      <div>jake layout</div>
      {children}
    </div>
  )
}