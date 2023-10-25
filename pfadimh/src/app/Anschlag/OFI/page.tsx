"use client";
import Header from "@/app/Components/Header";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

export default function MyCard() {
  return (
    <main>
      <Header />
      <div className="p-10 flex justify-center bg-licorice">
        <div className="grid grid-cols-1 md:w-[768px] sm:grid-cols-3 gap-8">
          <Card className="w-full sm:col-span-2 bg-livorice boxShadow:none">
            <CardHeader>
              <h3 className="text-3xl font-bold text-gamboge">
                Unsere nächste Aktivität.
              </h3>
            </CardHeader>
            <CardBody>
              <div className="text-gamboge" style={{ whiteSpace: "pre-line" }}>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{"\n"}
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet,{"\n"}
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren,{"\n"}
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className=" w-full bg-licorice shadow:none">
            <CardHeader>
              <h3 className="text-3xl font-bold text-gamboge">Kalender</h3>
            </CardHeader>
            <CardBody>
              <div className="text-gamboge" style={{ whiteSpace: "pre-line" }}>
                <h4>Planungstag</h4>
                <p className="text-gamboge">22. Oktober 2023</p>
                {"\n"}
                <h4>Heimwoche</h4>
                <p className="text-gamboge">
                  22. Oktober 2023 - 28. Oktober 2023
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="sm:col-span-2 w-full bg-licorice p-5  shadow:none">
            <CardHeader>
              <h2 className="text-3xl font-bold text-gamboge">Über uns.</h2>
            </CardHeader>
            <CardBody>
              <div
                className="text-gamboge font-sans"
                style={{ whiteSpace: "pre-line" }}
              >
                Wir sind die Piostufe. In unserer Stufe werden die
                Teilnehmer*innen selbstständig. Es werden spannende Aktivitäten
                geplant und Anlässe
                {"\n"}
                {"\n"}
                durchgeführt. Auch findet ein Austausch mit verschiedenen Pios
                aus
                {"\n"}
                der Umgebung statt. Die Piostufe ist eine erlebnisreiche Zeit,
                in
                {"\n"}
                {"\n"}
                der die Teilnehmer*innen die wichtigste Grundlage lernen, um
                gute
                {"\n"}
                Leiter*innen zu sein und mit gleichaltrigen tolle Erlebnisse zu
                sammeln.
              </div>
            </CardBody>
          </Card>

          <Card className=" hidden sm:block  bg-licorice  shadow:none">
            <CardBody className="random_img">
              <Image
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=399x10000:format=png/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
                alt="Ich bin voll Däbii"
              />
            </CardBody>
          </Card>

          <Card className="w-full sm:col-span-3 bg-licorice  shadow-none ">
            <CardHeader>
              <h3 className="text-3xl font-bold text-gamboge">Leiter*Innen</h3>
            </CardHeader>
            <CardBody>
              <img
                src="your_leaders_image_url_here"
                alt="leaders_description_here"
                className="text-gamboge"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
