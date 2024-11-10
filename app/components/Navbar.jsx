'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Image} from "@nextui-org/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";



export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    "About",
    "Courses",
    "Events",
    "Contact Us"
  ];

  return (
    <Navbar classNames={{ wrapper: 'max-w-full'}}>
      <NavbarBrand>
        <Link href='/' color="foreground" className='text-2xl font-semibold font-cormorantGaramond text-foreground'>
          Quranbound
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">about</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/courses">courses</Link>
        </NavbarItem>
        <SignedIn>
          <NavbarItem>
            <Link color="foreground" href="/student">student</Link>
          </NavbarItem>
        </SignedIn>
      </NavbarContent>
      <NavbarContent justify="end">
        <SignedOut>
          {/* <Button variant="solid" ><Link href="">Login</Link></Button> */}
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}