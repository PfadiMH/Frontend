"use client";
import Header from "@/app/Components/Header";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import pyro from "./../../assets/pyro.jpg";
import battino from "./../../assets/battino.jpg";
import milui from "./../../assets/milui.jpg";

export default function MyCard() {
  return (
    <main>
      <Header />
      <div className="p-10 flex justify-center bg-licorice">
        <div className="grid grid-cols-1 md:w-[768px] sm:grid-cols-3 gap-8">
          <Card className="w-full sm:col-span-2 bg-livorice">
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

          <Card className=" w-full bg-licorice  ">
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

          <Card className="sm:col-span-2 w-full bg-licorice p-5 ">
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

          <Card className=" hidden sm:block  bg-licorice ">
            <CardBody className="random_img">
              <Image
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=399x10000:format=png/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
                alt="Ich bin voll Däbii"
              />
            </CardBody>
          </Card>
          <div className="flex flex-col w-full sm:col-span-3 gap-3">
            <h3 className="text-3xl font-bold w-full text-gamboge">
              Leiter*Innen
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-3 w-full">
              <div>
                <Card>
                  <div className="relative  rounded-lg  z-10 bg-align-centre h-[16rem] flex justify-center overflow-hidden items-center">
                    <Image
                      removeWrapper
                      isZoomed
                      alt="Banner"
                      className="z-0 h-full object-cover"
                      radius="none"
                      src={battino.src}
                    />
                  </div>
                  <CardFooter className="border-gamboge  border-b-[10px] absolute bg-licorice/70 bottom-0 z-10 justify-between pointer-events-none ">
                    <div className="font-extrabold">
                      <p className="text-gamboge text-lg">Battino</p>
                      <p className="text-gamboge text-tiny">Florian Loew</p>
                      <p className="text-gamboge text-tiny">
                        battino@Pfadi-MH.com
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card>
                  <div className="relative  rounded-lg h-[16rem] z-10 bg-align-centre  flex justify-center overflow-hidden items-center">
                    <Image
                      removeWrapper
                      isZoomed
                      alt="Banner"
                      className="z-0 h-full sm:w-full object-cover"
                      radius="none"
                      src={pyro.src}
                    />
                  </div>
                  <CardFooter className="border-gamboge  border-b-[10px] absolute bg-licorice/70 bottom-0 z-10 justify-between pointer-events-none ">
                    <div className="font-extrabold">
                      <p className="text-gamboge text-lg">Pyro</p>
                      <p className="text-gamboge text-tiny">
                        Sebastian Schmucki
                      </p>
                      <p className="text-gamboge text-tiny">
                        pyro@Pfadi-MH.com
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card>
                  <div className="relative  rounded-lg h-[16rem] z-10 bg-align-centre  flex justify-center overflow-hidden items-center">
                    <Image
                      removeWrapper
                      isZoomed
                      alt="Banner"
                      className="z-0 w-full h-auto object-cover"
                      radius="none"
                      src={milui.src}
                    />
                  </div>
                  <CardFooter className="border-gamboge border-b-[10px] absolute bg-licorice/70 bottom-0 z-10 justify-between pointer-events-none ">
                    <div className="font-extrabold">
                      <p className="text-gamboge text-lg">Milui</p>
                      <p className="text-gamboge text-tiny">Lia Humbel</p>
                      <p className="text-gamboge text-tiny">
                        milui@Pfadi-MH.com
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
