"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "react-aria";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      {/* Mobile menu (up to 768px) */}{" "}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>
            <ul className="space-y-4">
              <li>
                <Link href="/blog"> Blog</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/newsletter"> Newsletter</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop menu (from 768px and up) */}{" "}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/blog" className="hover:underline">
            {" "}
            Blog
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/newsletter" className="hover:underline">
            {" "}
            Newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
