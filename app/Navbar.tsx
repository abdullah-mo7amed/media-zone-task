"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li className="flex flex-col items-center">
        <Link
          href="#"
          className="py-3.5 px-5 border-b-2 border-white text-base font-roboto hover:border-b-2 hover:border-white transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li className="flex flex-col items-center">
        <Link
          href="#"
          className="py-3.5 px-5 text-base font-roboto hover:border-b-2 hover:border-white transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          About us
        </Link>
      </li>
      <li className="flex flex-col items-center">
        <Link
          href="#"
          className="py-3.5 px-5 text-base font-roboto hover:border-b-2 hover:border-white transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Our Projects
        </Link>
      </li>
      <li className="flex flex-col items-center text-base font-roboto">
        <Link
          href="#"
          className="py-3.5 px-5 hover:border-b-2 hover:border-white transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact us
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 z-90 w-full bg-transparent">
      {" "}
      {/* Adjusted z-index */}
      <div className="container flex justify-between items-center py-2.5 mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added responsive padding */}
        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gray-900 text-white border-none"
            >
              <SheetTitle hidden/>
              {/* Changed side to left, removed border */}
              <nav className="flex flex-col gap-4 py-6">{navLinks}</nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex text-white font-bold text-lg relative">
          {navLinks}
        </ul>
        {/* Logo - Responsive Positioning */}
        <Image
          src="/logo-2.webp"
          alt="logo-2"
          width={100}
          height={63}
          className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:absolute md:rotate-[20deg] md:end-32 md:top-12" // Adjusted max-width, made absolute positioning and rotation desktop-only
        />
      </div>
    </nav>
  );
}
