"use client"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function MyCard() {
  return (
    <div className="mx-28 bg-white">
    <div className="mx-14 bg-white">
    <div className="h-screen flex justify-center items-start bg-white">
      <Card className="w-15 h-13 mt-5 bg-red-100">
        <CardHeader>
          <h2 className="text-3xl font-bold text-red-600">Über uns.</h2>
        </CardHeader>
        <CardBody>
        <div className="text-black font-sans" style={{ whiteSpace: "pre-line" }}>
              Wir sind die Piostufe. In unserer Stufe werden die Teilnehmer*innen{"\n"}
              selbstständig. Es werden spannende Aktivitäten geplant und Anlässe{"\n"}
              durchgeführt. Auch findet ein Austausch mit verschiedenen Pios aus{"\n"}
              der Umgebung statt. Die Piostufe ist eine erlebnisreiche Zeit, in{"\n"}
              der die Teilnehmer*innen die wichtigste Grundlage lernen, um gute{"\n"}
              Leiter*innen zu sein und mit gleichaltrigen tolle Erlebnisse zu sammeln.
            </div>
        </CardBody>
      </Card>

      <Card className="bg-red-100">
        <CardBody className="random_img">
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=399x10000:format=png/path/s4c5d6f225e690de2/image/i1750ff59e7550964/version/1667412256/image.png"
            alt="Ich bin voll Däbii"
            className="h-13 w-13"
          />
        </CardBody>
      </Card>
      </div>


      <div className="mx-14">
      <div className="h-screen flex justify-center items-start bg-white">
      <Card className="w-15 h-13 mt-5 bg-red-100">
        <CardHeader>
          <h3 className="text-3xl font-bold text-red-600">Kalender</h3>
        </CardHeader>

        <CardBody>
          <div className="text-black" style={{ whiteSpace: "pre-line" }}>
            <h4>Planungstag</h4>
            <p className="text-blue-600">22. Oktober 2023</p>{"\n"}
            <h4>Heimwoche</h4>
            <p className="text-blue-600">22. Oktober 2023 - 28. Oktober 2023</p>
          </div>
        </CardBody>
      </Card>

      <div className="h-32 w-32">
        <div className="absolute inset-x-0 bottom-0">
          <Card className="w-15 h-13 mt-5 bg-red-100">
            <CardHeader>
              <h3 className="text-3xl font-bold text-red-600">Unsere nächste Aktivität.</h3>
            </CardHeader>

            <CardBody>
              <p className="text-black" style={{whiteSpace: "pre-line"}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.{"\n"}
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,{"\n"}
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,{"\n"}
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </CardBody>
          </Card>
          </div>
          </div>
          </div>
          </div>

          <div className="mx-14">
          <div className="flex mb-4">
    <div className="w-1/3 bg-gray-400 h-12"></div>
    <Card className="w-15 h-30 bg-red-100">
        <CardHeader>
          <h3 className="text-3xl font-bold text-red-600">Leiter*Innen</h3>
        </CardHeader>

        <CardBody>
          <img
            src="your_leaders_image_url_here"
            alt="leaders_description_here"
            className="text-black"/>
        </CardBody>
      </Card>
      </div>

      </div>
      </div>
      </div>
  );
}
