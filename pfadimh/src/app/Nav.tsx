"use client";
/* 
1. home
2. Schnuppern
3. Anschäge
4. Über uns
5. news
6. Galerie
7. Shop

*/

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar isBlurred className="content-start">
      <NavbarBrand className="justify-end">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
          alt="PfadiMH Logo"
          className="w-12 h-12 align-left "
        />
        <p className="font-bold">Pfadi MH</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            HOME
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            KONTAKT
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            STANDORT
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            LÄDELI
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FOTOGALERIE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SCHNUPPERN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            DAS IST PFADI
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
              >
                ANSCHLÄGE
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="Pfadi Gruppen"
            className="w-[340px] text-black"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="wölfli" description="No description">
              <Divider />
              WÖLFLI
            </DropdownItem>
            <DropdownItem key="bienli" description="No description">
              BIENLI
            </DropdownItem>
            <DropdownItem key="pfadistufe meitli" description="No description">
              PFADISTUFE MEITLI
            </DropdownItem>
            <DropdownItem key="pfadistufe buebe" description="No description">
              PFADISTUFE BUEBE
            </DropdownItem>
            <DropdownItem key="pios" description="No description">
              PIOS
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
};

export default Nav;
