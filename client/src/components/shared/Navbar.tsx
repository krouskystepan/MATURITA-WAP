import { navLinks } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useState } from "react";

/**
 * Navbar component for navigating through the application
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Desktop navigation */}
      <div className="sticky bottom-0 top-0 hidden h-screen w-56 overflow-y-auto bg-secondary-foreground p-2 sm:block lg:left-0">
        <div className="text-xl text-secondary">
          {/* App title */}
          <div className="mt-1 flex items-center justify-center gap-3 p-2.5 text-lg">
            <h1 className="font-bold uppercase text-gray-200">Inzeráty</h1>
          </div>
          <Separator className="bg-gray-400" />
        </div>
        {/* Home link */}
        <Link
          to="/"
          className="mt-4 flex cursor-pointer items-center gap-2 rounded-sm p-2 text-lg font-semibold text-secondary duration-150 hover:bg-primary"
        >
          <span>Všechny inzeráty</span>
        </Link>
        {/* Accordion menu for categories and links */}
        <Accordion type="multiple">
          {navLinks.map((link) => (
            <AccordionItem
              key={link.category}
              value={link.category}
              className="border-none"
            >
              {/* Category header */}
              <AccordionTrigger className="mt-4 flex cursor-pointer items-center gap-2 rounded-sm p-2 text-lg font-semibold text-secondary duration-150 hover:bg-primary hover:no-underline">
                {link.category}
              </AccordionTrigger>
              {/* Sublinks for each category */}
              {link.links.map((sublink) => (
                <Link to={sublink.url} key={sublink.title}>
                  <AccordionContent className="mx-6 mt-2 flex cursor-pointer  rounded-sm p-2 font-semibold text-secondary duration-150 hover:bg-primary">
                    {sublink.title}
                  </AccordionContent>
                </Link>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Mobile navigation */}
      <div className="absolute right-0 top-0 flex size-16 items-center justify-center rounded-s-2xl bg-secondary-foreground text-secondary sm:hidden">
        {/* Mobile menu icon */}
        <Menu
          size={38}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* Mobile menu content */}
      <div
        className={`absolute inset-0 w-screen bg-secondary-foreground transition-transform duration-700 sm:hidden ${isOpen ? "-translate-y-0" : "-translate-y-full"}`}
      >
        {/* Close button */}
        <X
          className="absolute right-4 top-4 cursor-pointer text-secondary"
          size={38}
          onClick={() => setIsOpen(false)}
        />
        {/* Mobile menu links */}
        <div className="flex h-full flex-col items-center justify-center gap-3 text-4xl text-primary-foreground">
          {/* Home link */}
          <Link to={"/"} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          {/* Links for each category */}
          {navLinks.map((link) => (
            <div
              className="flex flex-wrap justify-center gap-2 text-center"
              key={link.category}
            >
              {link.links.map((subLink) => (
                <Link
                  to={subLink.url}
                  className="mx-2"
                  onClick={() => setIsOpen(false)}
                  key={subLink.title}
                >
                  {subLink.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
