import Navbar from "@/components/shared/Navbar";
import React from "react";

/**
 * This component represents the layout for views/pages in the application.
 * It includes a Navbar and a main section for displaying the content.
 *
 * @param children ReactNode - The content to be displayed within the layout.
 */
export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-secondary-foreground">
      <Navbar />
      <section className="m-4 h-[calc(100dvh-32px)] flex-1 rounded-2xl bg-primary-foreground p-4 md:min-w-96">
        {children}
      </section>
    </main>
  );
}
