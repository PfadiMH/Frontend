"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

export default function DasIstPfadi() {
  const {
    isOpen: isPfadistufeOpen,
    onOpen: onPfadistufeOpen,
    onClose: onPfadistufeClose,
    onOpenChange: onPfadistufeOpenChange,
  } = useDisclosure();

  const {
    isOpen: isWolfOpen,
    onOpen: onWolfOpen,
    onClose: onWolfClose,
    onOpenChange: onWolfOpenCharge,
  } = useDisclosure();

  const {
    isOpen: isPiostufeOpen,
    onOpen: onPiostufeOpen,
    onClose: onPiostufeClose,
    onOpenChange: onPiostufeOpenCharge,
  } = useDisclosure();

  const {
    isOpen: isRoverstufeOpen,
    onOpen: onRoverstufeOpen,
    onClose: onRoverstufeClose,
    onOpenChange: onRoverstufeOpenCharge,
  } = useDisclosure();
  return (
    <div className="p-10">
      <div className="md:w-[768px] grid grid-flow-col grid-rows-3 gap-4 flex-auto">
        <Card className="row-span-3 bg-#941B0C">
          <CardBody>
            <h1 className="text-3xl font-bold text-red-600">Was ist Pfadi?</h1>
            <p>
              Die Pfadis treffen sich regelmässig mit Jugendlichen in ihrem
              Alter zu gemeinsamen Erlebnissen. Sie verbringen viel Zeit in der
              Natur, wo sie praktisches Wissen für das Leben im Freien erlernen.
              Spiel, Spass und Abenteuer stehen bei diesen Aktivitäten im
              Vordergrund. Gegenseitiger Respekt und Toleranz führen oft zu
              lebenslangen Freundschaften. Gleichzeitig übernehmen Kinder und
              Jugendliche aber auch Schritt für Schritt Verantwortung. Sie
              bestimmen das Geschehen in ihrer Gruppe mit und engagieren sich
              für ihre Mitmenschen. Höhepunkte des Pfadiprogramms sind mit
              Sicherheut die jährlichen Lager zur Ferienzeit. Die Pfadi wurde
              1907 vom Engländer Robert Baden-Powell gegründet mit dem Ziel,
              Kindern und Jugendlichen eine sinnvolle Freizeitbeschäftigung zu
              bieten. Heute ist sie eine weltweite Bewegung mit rund 28
              Millionen Mitgliedern. Diese verbinden nicht nur die gemeinsamen
              Aktivitäten, sondern auch äussere Erkennungsmerkmale: Die meisten
              Pfadis tragen ein Pfadifoulard, das Pfadihemd oder einen
              gruppeneigenen Pullover. Einerseits, weil man sich damit
              unbeschwert im Dreck tummeln kann, andererseits, weil die Kleidung
              auch international ein Symbol der Zusammengehörigkeit ist. Auch
              wir in der Schweiz sind somit ein Teil einer weltweiten Bewegung -
              bist du dabei? Das kannst du Dir ja noch ein wenig überlegen -
              Erforsche die Seite und erfahre mehr über die Aktivitäten, die
              Altersstufen und die Facetten der Pfadi!
            </p>
          </CardBody>
        </Card>
        <div className="row-span-2">
          <div className="w-[300px] h-[300px]">
            <Image
              alt="Woman listing to music"
              className="w-full object-fill"
              src="https://www.srf.ch/static/cms/images/960w/cd42fbd.jpg"
              isZoomed
            />
          </div>

          <Card className="border-none bg-red-100 shadow-lg">
            <CardBody>
              <h1>Die Pfadi in Zahlen</h1>
              <p>50’000 Pfadis 1200 Lager im Jahr</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Image
        alt="Wir wollen"
        className="object-cover"
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4c5d6f225e690de2/image/i0bba5a1d06017a56/version/1316094712/image.gif"
        isZoomed
      />

      <Card className="border-none bg-red-100 shadow-lg">
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Was will Pfadi?</h1>
          <p>
            Die Pfadibewegung fördert die ganzheitliche Entwicklung ihrer
            Mitglieder und stärkt ihr moralisches und soziales Bewusstsein. Sie
            versteht Erziehung als Entwicklungsprozess, der junge Menschen zur
            freien Rücksichtsnahme gegenüber anderen fähig macht. Die
            Pfadibewegung will der Welt des Kindes möglichst gerecht werden,
            aber auch darüber hinausweisen. Sie verbindet unbeschwertes Spiel
            von Kinder und Jugendlichen mit bewusster Vorbereitung auf das Leben
            als Erwachsene. Da die Pfadibewegung Kinder, Jugendliche und junge
            Erwachsene zu den Mitgliedern zählt, gestaltet sie die Umsetzung der
            Aktivitäten in altersgerechten Gruppen. Damit können
            Entwicklungsprozesse, wie auch die altersspezifischen Bedürfnisse
            der Mitglieder unterstützt bzw. berücksichtigt werden.
          </p>
        </CardBody>
      </Card>
      <div>
        <h1 className="text-3xl font-bold text-red-600">Wer kann mitmachen?</h1>
        <p>
          Die Pfadi steht allen Kindern und Jugendlichen offen. Sie richtet sich
          an Menschen, auf die wir in der Gegenwart eingehen wollen und die
          unsere Zukunft gestalten werden. Die Pfadibewegung will auf jede/n
          einzelne/n eingehen und gliedert sich darum in verschiedene
          Altersstufen. Dadurch versucht sie, auf Sprache und Symbole der Kinder
          und Jugendlichen einzugehen, ihre Art aufzunehmen und zu verstehen.
          Ihre Wünsche und Bedürfnisse drücken sie entsprechen ihrem Alter,
          ihrem Geschlecht und ihrer persönlicher Entwicklung verschieden aus.
        </p>
      </div>
      <Card className="border-none bg-slate-300 shadow-lg">
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Biberstufe</h1>
          <h2 className="font-bold text-red-600">-8 Jahre (Nicht Vorhanden)</h2>
          <p>
            Die Jüngsten der Jüngsten Pfadis heissen Biber. Hier steigen die
            Kinder ins Pfadileben ein. Sie finden hier Raum, sich selber und
            andere Kinder besser kennen zulernen, und erhalten die Möglichkeit,
            die Welt und deren Vielfältigkeit zu entdecken. Die Aktivitäten
            nehmen Rücksicht auf das Fantasiebedürfnis der Kinder.
          </p>
        </CardBody>
      </Card>

      <Card
        isPressable
        onPress={onWolfOpen}
        className="border-none bg-red-100 shadow-lg"
      >
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Wolfsstufe</h1>
          <h2 className="font-bold text-red-600">8 - 11 Jahre</h2>
          <p>
            Die jüngsten Pfadi heissen Wölfe. Das Dschungelbuch von Rudyard
            Kipling bildet den Roten Faden für ihre Aktivitäten. Im Spiel
            entdecken und lernen Kinder neues, erleben die Gruppe und schliessen
            neue Freundschaften. Naturerlebnisse und gemeinsame Unternehmungen
            sind wichtige Aspekte, wobei auch das Basteln nicht zu kurz kommt.
          </p>
          <p className="text-gray-600">Mehr Erfahren...</p>
        </CardBody>
        <Modal
          isOpen={isWolfOpen}
          onClose={onWolfClose}
          onOpenChange={onWolfOpenCharge}
          scrollBehavior={"outside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col  gap-1 text-3xl font-bold text-red-600">
                  Wolfsstufe
                </ModalHeader>
                <ModalBody>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    src="https://image.jimcdn.com/app/cms/image/transf/dimension=960x1024:format=jpg/path/s4c5d6f225e690de2/image/i2112058dfbcb0fc5/version/1647892445/image.jpg"
                    isZoomed
                  ></Image>
                  <p className="text-black">
                    Kinder 7-11 Hast du dich schon einmal mit einer Karte auf
                    die Suche nach einem Piratenschatz gemacht? Im Wald eine
                    richtige Baumhütte gebaut? Einen eigenen Indianerstamm
                    gegründet und einen Pfeilbogen gebastelt? Dich nachts auf
                    Gespensterjagd gemacht? An einem Bach die beste Staumauer
                    aller Zeiten errichtet? Als Hexe oder Zauberer eine wilde
                    Walpurgisnacht gefeiert? Einmal so richtig im Schlamm
                    gewühlt? Als Detektiv eine geheime Botschaft entschlüsselt?
                    Am Lagerfeuer Honigäpfel und Speckwürste gebraten? Und
                    abends spannenden Geschichten von Zwergen, Elfen und Trollen
                    gelauscht? Oder einfach nur die Sterne beobachtet? Und all
                    dies zusammen mit deinen besten Freunden? Bei den Wölflis
                    kannst du all das und noch vieles mehr erleben! Wir treffen
                    uns jeden Samstag und erleben spannende Abenteuer in der
                    Natur. Dabei kannst du dich so richtig austoben, das ist
                    doch ein Spass! Du lernst tolle Spiele kennen und gewinnst
                    viele neue Freunde. Damit wir gut zusammen auskommen, lernen
                    wir aufeinander Rücksicht zu nehmen. An die gemeinsamen
                    Erlebnisse können wir uns die ganze Woche erinnern und
                    warten schon gespannt auf den nächsten Samstag. Der
                    Höhepunkt jedes Jahres ist jedoch unser grosses Sommerlager.
                    Ein spannendes Lagerthema begleitet und durch die ganze
                    Woche. Letztes Jahr haben wir als Abenteurer im Graubünden
                    nach Drachen gesucht. So ein Lager müsstest du selbst mal
                    erleben! Am Abend brennt ein gemütliches Feuer, du schläfst
                    mit deinen Freunden in einem grossen Zimmer; hast viel Zeit
                    zum Spielen, Singen und Basteln. Vielleicht senden dir deine
                    Eltern sogar ein Überraschungspaket? Da würde ich natürlich
                    auch gerne ein wenig mitschlemmen, schliesslich wären wir
                    dann miteinander befreundet, oder? Quelle: PBS
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
      <Card
        isPressable
        onPress={onPfadistufeOpen}
        className="border-none bg-red-100 shadow-lg"
      >
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Pfadistufe</h1>
          <h2 className="font-bold text-red-600">11 - 15 Jahre</h2>
          <p>
            Die Jüngsten der Jüngsten Pfadis heissen Biber. Hier steigen die
            Kinder ins Pfadileben ein. Sie finden hier Raum, sich selber und
            andere Kinder besser kennen zulernen, und erhalten die Möglichkeit,
            die Welt und deren Vielfältigkeit zu entdecken. Die Aktivitäten
            nehmen Rücksicht auf das Fantasiebedürfnis der Kinder.
          </p>
        </CardBody>
        <Modal
          isOpen={isPfadistufeOpen}
          onClose={onPfadistufeClose}
          onOpenChange={onPfadistufeOpenChange}
          scrollBehavior={"outside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-3xl font-bold text-red-600">
                  Pfadistufe
                </ModalHeader>
                <ModalBody>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    src="https://image.jimcdn.com/app/cms/image/transf/dimension=960x1024:format=jpg/path/s4c5d6f225e690de2/image/i27b2d2f251f5699b/version/1647893170/image.jpg"
                    isZoomed
                  ></Image>
                  <p className="text-black">
                    Jugendliche 11 - 15 Seit drei Jahren bin ich jetzt bei den
                    Pfadis. Mit meinen Kolleginnen und Kollegen aus der
                    Pfadigruppe kann ich durch dick und dünn gehen. Zusammen
                    unternehmen wir die verrücktesten Dinge. Langweilig wird es
                    und garantiert nie. Wir sind viel draussen unterwegs,
                    organisieren lustige Wettkämpfe, übermitteln geheime
                    Botschaften, vergnügen uns bei Spielabenden, erzählen uns
                    spannende Geschichten oder veranstalten gemeinsam eine
                    riesige Schlammschlacht. Im Sommer gehen wir mit den Pfadis
                    für zwei Wochen in ein Lager. Dieses Jahr waren wir an einem
                    kleinen Fluss im Tessin. Das Wetter war sensationell, aber
                    am letzten Abend überraschte uns ein Gewitter. Wir standen
                    alle tapfer im Regen und befestigten unsere Gruppenzelte,
                    sonst hätte der Sturm sie einfach weggefegt! Das war nichts
                    für Angsthasen, aber wir Pfadis wissen uns eben zu helfen.
                    Auch die Jungs waren ausnahmsweise keine Weicheier und haben
                    tüchtig mit angepackt! Mit einfachen Mitteln gestalten wir
                    im Lager unseren Zeltplatz, bauen ein Esszelt, errichten
                    Aufenthaltsplätze für unsere Freizeit und überwinden sogar
                    kleine Schluchten mit Seilbrücken. Bei unserem Lagerturm
                    durfte ich wegen meiner Erfahrung an der obersten Etage
                    mitbauen, die befand sich mindestens zehn Meter über dem
                    Boden! Zum Glück war ich mit einem Seil gesichert, auch das
                    habe ich mittlerweile gelernt. Unserer Lagerthemen führen
                    uns in fremde Länder oder andere Zeiten. Im Wilden Westen
                    errichteten wir einen Saloon für Cowgirls, in der Zukunft
                    ein Raumschiff oder als Gallierinnen und Gallier ein ganzes
                    Dorf. Mehrtägige Ausflüge, abwechslungsreiche Aktivitäten
                    und gemeinsame Übernachtungen am Lagerfeuer machen die zwei
                    schönsten Wochen im Jahr unvergesslich! Wieso kommst du
                    nächstes Jahr nicht einfach auch in unser Sommerlager? So
                    könntest du viele neue Kontakte schliessen! Einen Platz bei
                    uns im Zelt finden wir auch alle Fälle und beim grossen
                    Abschlussessen wird sicher jemand den Teller mit dir teilen,
                    falls du deinen eigenen vergessen hast. Die wichtigste
                    Gruppe bei uns in der Pfadi ist das Fähnli. Das Fähnli ist
                    eine kleine Gruppe von Freunden, die wie Pech und Schwefel
                    zusammenhalten. Dort fühlst du dich akzeptiert und lernst,
                    zum Leben in unserer Gruppe beizutragen. Jedes Mitglied in
                    meinem Fähnli hat eine Aufgabe und übernimmt Verantwortung,
                    wenn wir zusammen etwas unternehmen oder einen Wettkampf
                    durchführen. Dabei sind wir ziemlich selbstständig und
                    dürfen über unsere Aktivitäten bestimmen. Wir sorgen also
                    selbst dafür, dass der Spass auf keine Fälle zu kurz kommt.
                    Quelle: PBS
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
      <Card
        isPressable
        onPress={onPiostufeOpen}
        className="border-none bg-red-100 shadow-lg"
      >
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Piostufe</h1>
          <h2 className="font-bold text-red-600">15+ Jahre</h2>
          <p>
            Viele fünfzehnjährigen ist es ein Bedürfnis, eigene Ideen in ihrer
            Gruppe in Tat umzusetzen, bei den Pios ist dies möglich: Zusammen
            mit Gleichaltrigen werden in Equipen eigene Aktivitäten entwickelt,
            geplant und ausgeführt, wobei erfahrene Leiterinnen und Leiter mit
            Rat und Tat zur Seite stehen.
          </p>
          <p className="text-gray-600">Mehr Erfahren...</p>
        </CardBody>
        <Modal
          isOpen={isPiostufeOpen}
          onClose={onPiostufeClose}
          onOpenChange={onPiostufeOpenCharge}
          scrollBehavior={"outside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-3xl font-bold text-red-600">
                  Piostufe
                </ModalHeader>
                <ModalBody>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    src="https://image.jimcdn.com/app/cms/image/transf/dimension=960x1024:format=jpg/path/s4c5d6f225e690de2/image/iade756798ddbe873/version/1647893080/image.jpg"
                    isZoomed
                  ></Image>
                  <p className="text-black">
                    Pios 14 - 17 Jahre Bist du bereit für Herausforderungen?
                    Seit einem halben Jahr bin ich jetzt bei den Pios, und das
                    Abenteuer nimmt kein Ende. Gemeinsam bestimmen wird, was für
                    Projekte wir in Angriff nehmen wollen. Unser Aktionsradius
                    ist dabei ziemlich gross. Die Unternehmung beginnt damit,
                    dass wir die verrücktesten Ideen spinnen. Uns die geht damit
                    weiter, dass wir unsere Ideen in Tat umsetzen. Ob ein Lager
                    im Ausland, eine Seifenkistenrally oder eine Fahrradtour ins
                    Tessin, unsere Möglichkeiten sind unendlich, denn für uns
                    ist nichts unmöglich! Letztes Wochenende haben wir gemeinsam
                    das Hölloch erforscht. Natürlich braucht man dazu die
                    entsprechende Ausrüstung, aber die haben wir im Vorfeld
                    organisiert. Schliesslich war das nicht unserer erste
                    Expedition, im Klettern und Abseilen sind wir mittlerweile
                    kleine Profis. Im Winter möchten wir eine
                    Schneeschuhwanderung unternehmen und dabei in einem Iglu
                    übernachten. Vielleicht möchtest auch du schon im nächsten
                    Sommer mit uns die Alpen überqueren? Oder du bist ein
                    Schlagzeugtalent und willst dich an der Band beteiligen,
                    welche für das Schulhausfest gegründet wurde? Natürlich
                    kannst du auch deine eigenen Ideen bei uns einbringen, nur
                    Stubenhocken ist definitiv out. Wenn uns das lange
                    organisieren und vorbereiten zu streng ist, planen wir eine
                    Spontanaktivität. Du hättest die Leute sehen sollen, als wir
                    im Morgentram Kaffee und Gipfeli serviert haben. Oder die
                    erstaunten Blicke, als wir mitten im Sommer einen Schneemann
                    in der Stadt bauten! Eine Equipe besteht aus etwa zehn Pios
                    und ist das Herz unserer Altersstufe. Gemeinsam planen wir
                    unserer Unternehmungen und führen sie durch. Dabei
                    organisieren wir uns selbstständig und sind auch dafür
                    verantwortlich, dass unser Vorhaben gelingt. Eine
                    Betreuungsperson begleitet uns, falls es Probleme geben
                    sollte. An nationalen und internationalen Anlässen kannst du
                    viele Jugendliche in deinem Alter treffen und neue
                    Freundschaften knüpfen. Unsere Equipe plant momentan ein
                    Lager auf der schwedischen Insel Vässarö. Dort treffen sich
                    Pfadigruppen aus der ganzen Welt. Mittlerweile sprechen wir
                    ja alle genug Englisch, um uns mit den anderen Jugendlichen
                    zu verständigen. Und vielleicht lernen wir ja auch ein paar
                    nette Schwedinnen kennen. Bei den Pios haben wir einen
                    riesigen Freiraum. Wir sind aber auch selbst dafür
                    verantwortlich, diesen Freiraum sinnvoll zu gestalten.
                    Schliesslich sind wir keine Kinder mehr. Weil wir uns als
                    Pios dieser Herausforderung stellen und dabei nie auslernen,
                    heisst unser Wahlspruch zäme wiiter. Zusammen entdecken wir
                    die Welt und diskutieren über die Themen, welche uns
                    wirklich beschäftigen und treffen uns zwischendurch auch
                    ohne konkreten Anlass. Schliesslich bilden wir zusammen eine
                    buntgemischte Clique. Nachdem du einige Jahre bei den Pios
                    aktiv gewesen bist, wirst du natürlich neue
                    Herausforderungen suchen: Du schlägst als Rover ein neues
                    Kapitel in deinem Pfadileben auf und übernimmst neue ,
                    spannende Aufgaben. Bis dann gibt es aber noch einige
                    Abenteuer zu bestehen. Wir Pios planen unsere actionreiche
                    und verrückten Unternehmungen überall in der Schweiz. Gehst
                    auch du demnächst mit einer von unseren Equipen auf
                    Entdeckungstour? Quelle: PBS
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
      <Card
        isPressable
        onPress={onRoverstufeOpen}
        className="border-none bg-red-100 shadow-lg"
      >
        <CardBody>
          <h1 className="text-3xl font-bold text-red-600">Roverstufe</h1>
          <h2 className="font-bold text-red-600">17+ Jahre</h2>
          <p>
            Die ältesten aktiven Mitglieder werden Rover genannt. In ihren
            Unternehmungen erleben sie in eigener Verantwortung etwas, das sie
            von Anfang bis Schluss selber planen, durchführen und auswerten.
            Viele ihrer Aktivitäten haben zum Ziel, anderen tatkräftig Hilfe zu
            leisten. Neben dem Mitgestalten in der eigenen Altergruppe sind die
            Rover auch als Leiterinnen und Leiter tätig. In Kursen, die von der
            Pfadi in Zusammenarbeit mit Jugend & Sport und mit der Unterstützung
            des Bundesamtes für Kultur angeboten werden, werden die Leiterinnen
            und Leiter optimal auf ihre Aufgabe vorbereitet und ausgebildet.
          </p>
          <p className="text-gray-600">Mehr Erfahren...</p>
        </CardBody>
        <Modal
          isOpen={isRoverstufeOpen}
          onClose={onRoverstufeClose}
          onOpenChange={onRoverstufeOpenCharge}
          scrollBehavior={"outside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-3xl font-bold text-red-600">
                  Roverstufe
                </ModalHeader>
                <ModalBody>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4c5d6f225e690de2/image/i4ffaf35550c24ea7/version/1647892825/image.jpg"
                    isZoomed
                  ></Image>
                  <p className="text-black">
                    Die Roverstufe gibt es erst seit Anfang 2022 in der Pfadi
                    Meilen Herrliberg. Die Roverstufe besteht aus allen aktiven
                    und inaktiven Leiter der Pfadi Meilen-Herrliberg. Die
                    Roverstufe unterstützt einerseits die Abteilungsleitung in
                    ihrer administrativen Aufgabe, anderseits organisiert sie
                    auch Aktivitäten und Anlässe für die Leiter. Logischerweise
                    trifft man sich hier nicht mehr am Samstagnachmittag im Wald
                    und macht ein Feuer. Vielmehr sind es grössere Ausflüge oder
                    spezielle Aktivitäten welche man ca. all halb Jahr in
                    Angriff nimmt. So zum Beispiel ein Ski-Weekend, ein Ausflug,
                    ein Sommergrill oder auch ein Leiter-Lager.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
      <Link href="https://pta-pfannenstil.ch/">
        <Card isPressable className="border-none bg-red-100 shadow-lg">
          <CardBody>
            <h1 className="text-3xl font-bold text-red-600">PTA</h1>

            <p>
              Die Pfadi-Gruppe PTA am Pfannenstil ist ein Ort, an dem
              Pfadfinderinnen und Pfadfinder mit und ohne Beeinträchtigung
              gemeinsam Abenteuer erleben. Jede und jeder ist hier willkommen!
              Wir treffen uns alle zwei Wochen am Samstag im schönen Zürich
              Oberland. Unser vielfältiges Programm bietet für alle etwas
              Spannendes. Wir achten darauf, unsere Aktivitäten so anzupassen,
              dass alle teilnehmen und ihre Talente einbringen können. So wird
              bei uns eine inklusive Pfadi gelebt, in der sich jede und jeder
              wohlfühlt.
            </p>
            <p className="text-gray-600">Mehr Erfahren...</p>
          </CardBody>
        </Card>
      </Link>

      <Card className="border-none bg-red-100 shadow-lg gap-4">
        <div>
          <h1 className="text-3xl font-bold text-red-600">
            Gründe für die Pfadi
          </h1>
          <p>
            Die Pfadis unternehmen in der Gruppe gemeinsam Aktivitäten, zum
            Beispiel Geländespiele, Basteln, Schnitzeljagden, Knoten knüpfen,
            Kochen, Postenläufe, Lagerbauten oder das Erlernen von erster Hilfe.
            Dabei entdeckt man nicht nur die Natur sondern auch Freunde fürs
            Leben.
          </p>
        </div>
        <div className=" grid grid-flow-col">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
              <h1 className="text-3xl font-bold text-red-600">
                Gründe für die Pfadi
              </h1>
              <p className="text-white font-medium text-large">
                Die Pfadis unternehmen in der Gruppe gemeinsam Aktivitäten, zum
                Beispiel Geländespiele, Basteln, Schnitzeljagden, Knoten
                knüpfen, Kochen, Postenläufe, Lagerbauten oder das Erlernen von
                erster Hilfe. Dabei entdeckt man nicht nur die Natur sondern
                auch Freunde fürs Leben.
              </p>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://pfadi-sirius.ch/wp-content/uploads/2022/11/DSC_0002_2022-08-09-18-03-34-scaled.webp"
            ></Image>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h1 className="text-3xl font-bold text-red-600">
                Gründe für die Pfadi
              </h1>
              <p className="text-white font-medium text-large">
                Die Pfadis unternehmen in der Gruppe gemeinsam Aktivitäten, zum
                Beispiel Geländespiele, Basteln, Schnitzeljagden, Knoten
                knüpfen, Kochen, Postenläufe, Lagerbauten oder das Erlernen von
                erster Hilfe. Dabei entdeckt man nicht nur die Natur sondern
                auch Freunde fürs Leben.
              </p>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://pfadi-sirius.ch/wp-content/uploads/2022/11/DSC_0002_2022-08-09-18-03-34-scaled.webp"
            ></Image>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h1 className="text-3xl font-bold text-red-600">
                Gründe für die Pfadi
              </h1>
              <p className="text-white font-medium text-large">
                Die Pfadis unternehmen in der Gruppe gemeinsam Aktivitäten, zum
                Beispiel Geländespiele, Basteln, Schnitzeljagden, Knoten
                knüpfen, Kochen, Postenläufe, Lagerbauten oder das Erlernen von
                erster Hilfe. Dabei entdeckt man nicht nur die Natur sondern
                auch Freunde fürs Leben.
              </p>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://pfadi-sirius.ch/wp-content/uploads/2022/11/DSC_0002_2022-08-09-18-03-34-scaled.webp"
            ></Image>
          </Card>
        </div>
      </Card>
    </div>
  );
}
