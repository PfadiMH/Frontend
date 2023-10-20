import { Link } from "@nextui-org/link";
import Mountain from "@/app/Components/Mountain";
import ParallaxMountains from "./Components/ParalaxMountains";

export default function Home() {
  return (
    <main>
      <Mountain />
      <Link href="/Anschlag/OFI">
        <p> Page</p>
      </Link>
    </main>
  );
}
