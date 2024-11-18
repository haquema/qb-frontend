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
          <Button size="md" variant="light" className="text-white">Courses</Button>
        </NavbarItem>
        <SignedOut>
          <SignInButton><Button color="primary" className="text-md">Login</Button></SignInButton>
        </SignedOut>
        <SignedIn>
          <NavbarItem>
            <Button size="md" variant="light" className="text-white" onClick={() => window.location.href = 'https://quranbound.teachable.com/sign_in'}>
              Student
            </Button>
          </NavbarItem>
          <UserButton userProfileUrl="/account" />
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}
