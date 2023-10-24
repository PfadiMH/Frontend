import { Link } from "@nextui-org/link";
import ParalaxMountains from "./Components/ParalaxMountains";

export default function Home() {
  return (
    <main className="bg-">
      <ParalaxMountains />
      <Link href="/Anschlag/OFI">
        <p> Page</p>
      </Link>
    </main>
  );
}
