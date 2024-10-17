"use client";
import React, { useEffect, useState } from "react";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    // Add scroll event listener to toggle shadow on scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarShadow(true); // Apply shadow when scrolled
      } else {
        setNavbarShadow(false); // Remove shadow when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/"
          className={`flex items-center ${
            pathname === "/"
              ? "text-blue-400"
              : "text-gray-700 hover:text-blue-400"
          }`}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/customerstories"
          className={`flex items-center ${
            pathname === "/customerstories"
              ? "text-blue-400"
              : "text-gray-700 hover:text-blue-400"
          }`}
        >
          Customer Stories
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/contactsales"
          className={`flex items-center ${
            pathname === "/contactsales"
              ? "text-blue-400"
              : "text-gray-700 hover:text-blue-400"
          }`}
        >
          Contact Sales
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div
      className={`sticky top-0 z-10 h-max max-w-full bg-white rounded-none px-4 py-2 lg:px-8 lg:py-4 transition-shadow duration-300 ${
        navbarShadow ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={70} width={200} />
        </Link>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <Link
          href="https://calendly.com/ghostingtech-y_rs/it-service-and-consulting"
          target="_blank"
        >
          <Button
            size="sm"
            className="hidden lg:inline-block bg-blue-400 hover:bg-blue-600"
          >
            <span>Request a Demo</span>
          </Button>
        </Link>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Link
          href="https://calendly.com/ghostingtech-y_rs/it-service-and-consulting"
          target="_blank"
        >
          <Button fullWidth size="sm" className="bg-blue-400 hover:bg-blue-600">
            <span>Request a Demo</span>
          </Button>
        </Link>
      </Collapse>
    </div>
  );
};

export default Navbar;
