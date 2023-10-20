"use client";

import {
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarItem,
  Navbar,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
            alt="PfadiMH Logo"
            className="w-12 h-12 align-left "
          />
          <p className="font-bold">Pfadi MH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            as="a"
            href="/Schnuppern"
            aria-current="page"
          >
            SCHNUPPERN
          </Link>
        </NavbarItem>

        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              radius="sm"
            >
              ANSCHLÄGE
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Pfadi Gruppen"
            className="w-[340px] text-black"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownSection title="1.Stufe" showDivider>
              <DropdownItem
                key="Akela"
                description="Buebe (Bis 10. Jahre)"
                as="a"
                href="/Anschlag/OFI"
              >
                Akela 🐺
              </DropdownItem>

              <DropdownItem
                key="Raschka"
                description="Meitli (Bis 10.Jahre)"
                as="a"
                href="/Anschlag/Raschka1"
              >
                Raschka 🐝
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="2.Stufe" showDivider>
              <DropdownItem
                key="2. Stufe"
                description="Buebe (10-14 Jahre"
                as="a"
                href="/Anschlag/OFI"
              >
                OFI ⚜️
              </DropdownItem>

              <DropdownItem
                key="2.Stufe"
                description="Raschka (10-14 Jahre"
                as="a"
                href="/Anschlag/Raschka2"
              >
                Ashera 🍀
              </DropdownItem>
            </DropdownSection>

            <DropdownItem
              key="PIOS"
              description="ab 14 Jahre"
              as="a"
              href="/Anschlag/PIOS"
            >
              PIOS 🧭
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
              >
                ÜBER UNS
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
            <DropdownItem key="2023">FAQ</DropdownItem>
            <DropdownItem key="2022">Lager</DropdownItem>
            <DropdownItem key="2021">Leitende</DropdownItem>
            <DropdownItem key="2020">Treffpunkt</DropdownItem>
            <DropdownItem key="2019">Kontakt</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            NEWS
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
                GALERIE
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
            <DropdownSection title="Bilder" showDivider>
              <DropdownItem key="2023">2023</DropdownItem>
              <DropdownItem key="2022">2022</DropdownItem>
              <DropdownItem key="2021">2021</DropdownItem>
              <DropdownItem key="2020">2020</DropdownItem>
              <DropdownItem key="2019">2019</DropdownItem>
              <DropdownItem key="2018">2018</DropdownItem>
              <DropdownItem key="2017">2017</DropdownItem>
              <DropdownItem key="1016">2016</DropdownItem>
              <DropdownItem key="1015">2015</DropdownItem>
              <DropdownItem key="2014">2014</DropdownItem>
            </DropdownSection>

            <DropdownSection title="Videos" showDivider>
              <DropdownItem key="Viedogalerie">2023</DropdownItem>
              <DropdownItem key="Viedogalerie">2007</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            SHOP
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#" aria-current="page">
            HOME
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#" aria-current="page">
            SCHNUPPERN
          </Link>
        </NavbarMenuItem>

        <Dropdown>
          <DropdownTrigger>
            <Link color="foreground">ANSCHLAG</Link>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="Pfadi Gruppen"
            className="w-[340px] text-black"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownSection title="1.Stufe" showDivider>
              <DropdownItem key="Akela" description="Buebe (Bis 10. Jahre)">
                Akela 🐺
              </DropdownItem>

              <DropdownItem key="Raschka" description="Meitli (Bis 10.Jahre)">
                Raschka 🐝
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="2.Stufe" showDivider>
              <DropdownItem key="2. Stufe" description="Buebe (10-14 Jahre">
                OFI ⚜️
              </DropdownItem>

              <DropdownItem key="2.Stufe" description="Raschka (10-14 Jahre">
                Raschka 🍀
              </DropdownItem>
            </DropdownSection>

            <DropdownItem key="PIOS" description="ab 14 Jahre">
              PIOS 🧭
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Link color="foreground">ÜBER UNS</Link>
            </DropdownTrigger>
          </NavbarMenuItem>

          <DropdownMenu
            aria-label="Pfadi Gruppen"
            className="w-[340px] text-black"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="2023">FAQ</DropdownItem>
            <DropdownItem key="2022">Lager</DropdownItem>
            <DropdownItem key="2021">Leitende</DropdownItem>
            <DropdownItem key="2020">Treffpunkt</DropdownItem>
            <DropdownItem key="2019">Kontakt</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarMenuItem>
          <Link color="foreground" href="#" aria-current="page">
            NEWS
          </Link>
        </NavbarMenuItem>

        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Link color="foreground">GALERIE</Link>
            </DropdownTrigger>
          </NavbarMenuItem>

          <DropdownMenu
            aria-label="Pfadi Gruppen"
            className="w-[340px] text-black"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownSection title="Bilder" showDivider>
              <DropdownItem key="2023">2023</DropdownItem>
              <DropdownItem key="2022">2022</DropdownItem>
              <DropdownItem key="2021">2021</DropdownItem>
              <DropdownItem key="2020">2020</DropdownItem>
              <DropdownItem key="2019">2019</DropdownItem>
              <DropdownItem key="2018">2018</DropdownItem>
              <DropdownItem key="2017">2017</DropdownItem>
              <DropdownItem key="1016">2016</DropdownItem>
              <DropdownItem key="1015">2015</DropdownItem>
              <DropdownItem key="2014">2014</DropdownItem>
            </DropdownSection>

            <DropdownSection title="Videos" showDivider>
              <DropdownItem key="Viedogalerie">2023</DropdownItem>
              <DropdownItem key="Viedogalerie">2007</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <NavbarMenuItem>
          <Link color="foreground" href="#" aria-current="page">
            SHOP
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
