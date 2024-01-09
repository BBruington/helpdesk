import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/dojo-logo.png";
export default function Nav() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
}
