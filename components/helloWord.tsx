import { ReactNode, useState } from "react";

export default function HelloWorld(
{ 
  children,
  hideHeading,
  className,
}: {
  children?: ReactNode,
  className?: string,
  hideHeading?: boolean
}) {
return(
  <div style={{ padding: 16 }} className={className}>
    {!hideHeading && <h1>My Hero</h1>}
    {children}
  </div>
)}