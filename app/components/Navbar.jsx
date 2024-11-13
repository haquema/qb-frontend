'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu} from "@nextui-org/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { User } from '@geist-ui/icons'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar classNames={{ wrapper: 'max-w-full'}}>
      <NavbarBrand>
        <Link href='/' color="foreground" className='text-2xl font-semibold font-cormorantGaramond text-foreground'>
          Quranbound
        </Link>
      </NavbarBrand>
      {/* <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="/courses">courses</Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <SignedOut>
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                variant="light"
              >
                <User size={20} color="lightblue" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="regular"><SignInButton><Button color="primary" className="w-full">Account</Button></SignInButton></DropdownItem>
              <DropdownItem key="student">
                <Button color="default" className="w-full" onClick={() => window.location.href = 'https://quranbound.teachable.com/sign_in'}>
                  Student Login
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}
