"use client";

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
    <Navbar isBlurred>
      <NavbarBrand>
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
          alt="PfadiMH Logo"
          className="w-12 h-12"
        />
        <p className="font-bold text-inherit">Pfadi MH</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
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
                Test Dropdown
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
            <DropdownItem
              key="autoscaling"
              description="Pfadi Gruppe Orthenstein Friendberg"
            >
              <span className="font-bold">2.Stufe</span>
              <Divider />
              OFI
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Gruppe Orthenstein Friendberg"
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
};

export default Nav;
