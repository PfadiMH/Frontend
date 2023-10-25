import { Link } from "@nextui-org/link";
import ParalaxMountains from "./Components/ParalaxMountains";

export default function Home() {
  return (
    <main className="bg-licorice">
      <ParalaxMountains />
      <div className="text-gamboge flex flex-col text-center p-4 md:p-16 gap-8">
        <h1 className="text-3xl font-bold">Die Abteilung Meilen-Herrliberg</h1>
        <p>
          Im Jahre 1936 ist unser Verein entstanden. Mit etwas mehr als 150
          Mitgliedern sind wir einer der grössten Jugendvereine in den Gemeinden
          Meilen und Herrliberg. Aktiv am Dorfleben teilzunehmen ist uns
          wichtig. Unsere Gruppen treffen sich jeweils am Samstag im Dorf, im
          Wald oberhalb der Gemeinden oder in unserem Pfadiheim Buech, um
          gemeinsam einen spannenden Nachmittag zu verbringen. Abenteuer und
          Spass sind garantiert. Neben den samstäglichen Treffen organisiert
          unser 30- köpfiges Leiterteam für die Pfadis auch diverste Anlässe,
          Lager und Weekends. Bist du noch nicht in der Pfadi und möchtest Du
          gerne einmal an einem Schnuppernachmittag teilnehmen? Du bist
          jederzeit herzlich willkommen! Kontaktiere doch einfach unsere
          Abteilungsleitung.
        </p>
      </div>
    </main>
  );
}
