import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/shared/logo.svg";
import menu from "@/app/assets/shared/icon-hamburger.svg";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 uppercase font-nav-text md:text-subheading-secondary md:tracking-subheading-secondary lg:text-nav lg:tracking-nav">
        <Link href="/">
          <Image
            src={logo}
            loading="eager"
            alt="Space Tourism"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        <button className="md:hidden" aria-label="Open menu">
          <Image
            src={menu}
            loading="eager"
            alt="Menu"
            className="w-6 h-6"
          />
        </button>

        <ul className="hidden gap-4 md:flex items-center">
          <li className="flex items-center gap-1 active:border-b-2 active:border-white">
            <span className="font-black hidden lg:block">00</span>
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center gap-1 active:border-b-2 active:border-white">
            <span className="font-black hidden lg:block">01</span>
            <Link href="/destination">Destination</Link>
          </li>
          <li className="flex items-center gap-1 active:border-b-2 active:border-white">
            <span className="font-black hidden lg:block">02</span>
            <Link href="/crew">Crew</Link>
          </li>
          <li className="flex items-center gap-1 active:border-b-2 active:border-white">
            <span className="font-black hidden lg:block">03</span>
            <Link href="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
