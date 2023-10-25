import { Divider } from "@nextui-org/divider";
import React from "react";
import { Card } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#1e0003]">
      <div className="md:w-[768px]">
        <div className="flex flex-col gap-4 justify-center">
          <h3 className=" text-center text-[#F79F00]">
            Folge uns auf Social Media:
          </h3>

          <div className="w-full relative bg-[#953816] flex  hover:bg-[#F79F00]">
            <img
              src="https://www.firewatchgame.com/images/banner_transparent_left.png"
              className="object-contain absolute left-0 h-full pointer-events-none"
              alt=""
            />
            <Button
              as="a"
              href="https://www.instagram.com/pfadimh/?hl=de"
              className="text-[#1e0003] grow bg-transparent"
              radius="none"
            >
              <span className="font-bold text-lg">INSTAGRAM</span>
            </Button>
            <img
              src="https://www.firewatchgame.com/images/banner_transparent_right.png"
              className="object-contain absolute right-0 h-full pointer-events-none"
              alt=""
            />
          </div>

          <div className="w-full relative bg-[#953816] flex hover:bg-[#F79F00]">
            <img
              src="https://www.firewatchgame.com/images/banner_transparent_left.png"
              className="object-contain absolute left-0 h-full pointer-events-none"
              alt=""
            />
            <Button
              as="a"
              href="https://www.facebook.com/pfadimh/?locale=de_D"
              className="text-[#1e0003] grow bg-transparent"
              radius="none"
            >
              <span className="font-bold text-lg">FACEBOOK</span>
            </Button>
            <img
              src="https://www.firewatchgame.com/images/banner_transparent_right.png"
              className="object-contain absolute right-0 h-full pointer-events-none"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center  gap-8">
        <div>
          <h2 className="unerline-offset-8 text-white">Kontakt</h2>
          <div className="text-black" style={{ whiteSpace: "pre-line" }}>
            <p className="text-[#F79F00]">
              pdfadimh@gmail.com
              {"\n"}
              {"\n"}
              078 660 92 93
              {"\n"}
              Meilen Herlliberg
            </p>
          </div>
        </div>
        <div className="">
          <h2>Downloads</h2>

          <p className="text-[#F79F00]">
            Jahresprogramm
            {"\n"}
            {"\n"}
            Organisation
            {"\n"}
            {"\n"}
            Bolstrasse 6
          </p>
        </div>
        <div className="">
          <h2>FAQ</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
