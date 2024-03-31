import { navLinks } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="sticky bottom-0 top-0 hidden h-screen w-56 overflow-y-auto bg-secondary-foreground p-2 sm:block lg:left-0">
        <div className="text-xl text-secondary">
          <div className="mt-1 flex items-center justify-center gap-3 p-2.5 text-lg">
            <Code />
            <h1 className="font-bold uppercase text-gray-200">Maturita app</h1>
          </div>
          <Separator className="bg-gray-400" />
        </div>
        <Link
          to="/"
          className="mt-4 flex cursor-pointer items-center gap-2 rounded-sm p-2 text-lg font-semibold text-secondary duration-150 hover:bg-primary"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Accordion type="multiple">
          {navLinks.map((link) => (
            <AccordionItem
              key={link.category}
              value={link.category}
              className="border-none"
            >
              <AccordionTrigger className="mt-4 flex cursor-pointer items-center gap-2 rounded-sm p-2 text-lg font-semibold text-secondary duration-150 hover:bg-primary hover:no-underline">
                {link.category}
              </AccordionTrigger>
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
      <div className="absolute right-0 top-0 flex size-16 items-center justify-center rounded-s-2xl bg-secondary-foreground text-secondary sm:hidden">
        <Menu
          size={38}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div
        className={`absolute inset-0 w-screen bg-secondary-foreground transition-transform duration-700 sm:hidden ${isOpen ? "-translate-y-0" : "-translate-y-full"}`}
      >
        <X
          className="absolute right-4 top-4 cursor-pointer text-secondary"
          size={38}
          onClick={() => setIsOpen(false)}
        />
        <div className="flex h-full flex-col items-center justify-center gap-3 text-4xl text-primary-foreground">
          <Link to={"/"} onClick={() => setIsOpen(false)}>
            Home
          </Link>
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
