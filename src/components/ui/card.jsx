import React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-xl border border-[hsl(var(--border))] shadow-sm p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
