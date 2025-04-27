"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ToggleMode from "./ToggleMode";
import React, { useEffect, useState } from "react";

const MOBILE_NAV_ITEMS = [
  { id: 0, navTitle: "Blog", href: "/" },
  { id: 1, navTitle: "About", href: "/about" },
  { id: 2, navTitle: "Newsletter", href: "/newsletter" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileNavOpen]);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] },
    },
    closed: {
      y: "-100%",
      transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] },
    },
  };

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.65, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <div className=" h-[72px]">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="flex justify-between items-center h-[72px] px-10 py-9">
        <div>John Doe</div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 ">
            {MOBILE_NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link href={`${item.href}`} className="hover:underline">
                  {item.navTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ToggleMode />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <motion.button
            className="text-sm uppercase cursor-pointer"
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}>
            Menu
          </motion.button>
          <ToggleMode />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <motion.div
          variants={mobileMenuVariant}
          initial="closed"
          animate="opened"
          exit="closed"
          className="lg:hidden fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-between bg-white text-black dark:bg-[#090D1F] dark:text-white z-50">
          <div className="w-full flex justify-end px-10 pt-9">
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
              className="text-sm uppercase cursor-pointer">
              Close
            </motion.button>
          </div>

          <motion.ul variants={ulVariant} className="mt-10 list-none">
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li
                href={`${navItem.href}`}
                key={navItem.id}
                whileTap={{ scale: 0.95 }}
                className="my-5 text-[34px] capitalize hover:italic cursor-pointer text-center">
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInVariant} className="mb-10">
            <ToogleMode />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
