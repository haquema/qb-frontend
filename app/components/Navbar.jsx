'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu} from "@nextui-org/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar classNames={{ wrapper: 'max-w-full'}}>
      <NavbarBrand>
        <Link href='/' color="foreground" className='text-2xl font-semibold font-cormorantGaramond text-foreground'>
          Quranbound
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/courses"><Button size="md" radius="sm" variant="light" className="text-white">Courses</Button></Link>
        </NavbarItem>
        <SignedOut>
          <SignInButton><Button variant="ghost" radius="sm" size="md" color="primary" className="text-sm">Login</Button></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton userProfileUrl="/account" />
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}
