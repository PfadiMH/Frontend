import { Divider } from "@nextui-org/divider";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, onpress } from "@nextui-org/button";

const Footer = () => {
  return (
    <div className="bg-black">
      <Card className="bg-black">
        <CardHeader>
          <h2>Kontakt</h2>
        </CardHeader>
        <CardBody>
          <div className="text-black" style={{ whiteSpace: "pre-line" }}>
            <p>
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
      <Card>
        <CardHeader>
          <h2>Downloads</h2>
        </CardHeader>
        <CardBody>
          <p>
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
      <Card>
        <CardHeader>
          <h2>FAQ</h2>
        </CardHeader>
        <CardBody>
          <p>Die häufig gestellten Fragen</p>
          add a button with link
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h2>Social Media</h2>
        </CardHeader>
        <CardBody>
          <p>Folge uns auf Social Media:</p>
          <Button
            onPress="https://www.facebook.com/pfadimh/?locale=de_D"
            className="bg-white"
          >
            Facebook
          </Button>
          <Button
            href="https://www.instagram.com/pfadimh/?hl=de"
            className="bg-white"
          >
            Instagram
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;
