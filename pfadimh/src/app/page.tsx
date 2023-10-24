import { Link } from "@nextui-org/link";
import Mountain from "@/app/Components/Mountain";
import ParalaxMountains from "./Components/ParalaxMountains";

export default function Home() {
  return (
    <main>
      <ParalaxMountains />
      <Link href="/Anschlag/OFI">
        <p> Page</p>
      </Link>
    </main>
  );
}
