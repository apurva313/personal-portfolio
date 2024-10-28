"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { React, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sm:mx-60 mx-8 my-4 flex justify-between items-center">
      <h1 className="uppercase font-semibold">Apurva</h1>

      {/* Nav links */}
      <div>
        {!isOpen && (
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden block bg-none">
            <Menu size={24} />
          </button>
        )}

        {/* Div for open in mobile */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-700/20 bg-opacity-90 backdrop-blur-md p-4 flex flex-col"
          >

            <div className="flex w-full justify-end">
              <button onClick={() => setIsOpen(!isOpen)} className=" z-99">
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 items-center">
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>About me</li>
              </Link>
              <Link href="#">
                <li>Services</li>
              </Link>
              <Link href="#">
                <li>Projects</li>
              </Link>
              <Link href="#">
                <li>Testimonials</li>
              </Link>
              <Link href="#">
                <li>Contact</li>
              </Link>
              <Link href="#">
                <li>
                  <Button className="bg-[#FD6F00]">Download CV</Button>
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
        <ul className="sm:flex hidden gap-6 items-center">
          <Link href="#">
            <li>Home</li>
          </Link>
          <Link href="#">
            <li>About me</li>
          </Link>
          <Link href="#">
            <li>Services</li>
          </Link>
          <Link href="#">
            <li>Projects</li>
          </Link>
          <Link href="#">
            <li>Testimonials</li>
          </Link>
          <Link href="#">
            <li>Contact</li>
          </Link>
          <Link href="#">
            <li>
              <Button className="bg-[#FD6F00]">Download CV</Button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
