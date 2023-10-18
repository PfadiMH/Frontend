import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <main>
      <h1>Hello base</h1>
      <Link href="/Anschlag/OFI">
        <p> Whats this</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305128.79947121127!2d8.736285800000001!3d53.3106923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b128100ceee335%3A0x42b52937a2ac426e!2sBremen%2C%20Deutschland!5e0!3m2!1sde!2sch!4v1697638174407!5m2!1sde!2sch"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </Link>
    </main>
  );
}
