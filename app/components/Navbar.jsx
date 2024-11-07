'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Image} from "@nextui-org/react";
import React from "react";
import { Menu, X } from '@geist-ui/icons'


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    "About",
    "Courses",
    "Events",
    "Contact Us"
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-cormorantGaramond text-xl font-extrabold">Quranbound</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4 text-sm font-geistSans" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/courses">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/events">
            Events
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarMenuToggle
          icon={Menu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
      </NavbarContent>
      <NavbarMenu >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              className="w-full text-base font-medium"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}