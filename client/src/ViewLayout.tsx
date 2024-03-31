import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-secondary-foreground">
      <Navbar />
      <section className="m-4 h-[calc(100dvh-32px)] min-w-96 flex-1 rounded-2xl bg-primary-foreground p-4">
        {children}
      </section>
    </main>
  );
}
