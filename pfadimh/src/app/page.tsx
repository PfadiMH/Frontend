"use client";
import { Link } from "@nextui-org/link";

import ParallaxMountains from "@/app/Components/ParalaxMountains";

export default function Home() {
  return (
    <main>
      <Link href="/Anschlag/OFI">
        <p> Page</p>
      </Link>
      <Link href="/Schnuppern">
        <p>Schnuppern</p>
      </Link>
    </main>
  );
}
