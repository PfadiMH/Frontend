import { Divider } from "@nextui-org/divider";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";

const Footer = () => {
  return (
    <div className="bg-licorice">
      <Card className="bg-black w-">
        <CardHeader>
          <h2 className="unerline-offset-8 text-white">Kontakt</h2>
        </CardHeader>
        <CardBody>
          <div className="text-black" style={{ whiteSpace: "pre-line" }}>
            <p className="text-white">
              pdfadimh@gmail.com
              {"\n"}
              {"\n"}
              078 660 92 93
              {"\n"}
              Meilen Herlliberg
            </p>
          </div>
        </CardBody>
      </Card>
      <Card className="bg-black">
        <CardHeader>
          <h2 className="unerline-offset-8 text-white">Downloads</h2>
        </CardHeader>
        <CardBody>
          <p className="text-white">
            Jahresprogramm
            {"\n"}
            {"\n"}
            Organisation
            {"\n"}
            {"\n"}
            Bolstrasse 6
          </p>
        </CardBody>
      </Card>
      <Card className="bg-black">
        <CardHeader>
          <h2 className="unerline-offset-8 text-white">FAQ</h2>
        </CardHeader>
        <CardBody>
          <p className="text-white">Die häufig gestellten Fragen</p>
          add a button with link
        </CardBody>
      </Card>
      <Card className="bg-black">
        <CardHeader>
          <h2 className="unerline-offset-8 text-white">Social Media</h2>
        </CardHeader>
        <CardBody>
          <p className="text-white">Folge uns auf Social Media:</p>
          <ButtonGroup>
            <Button
              as="a"
              href="https://www.facebook.com/pfadimh/?locale=de_D"
              className="bg-red-800"
            >
              Facebook
            </Button>
            <Button
              as="a"
              href="https://www.facebook.com/pfadimh/?locale=de_D"
              className="bg-red-800"
            >
              Instagram
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;
