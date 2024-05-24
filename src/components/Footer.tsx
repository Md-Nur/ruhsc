import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-accent-content">
      <aside>
        <Image src={logo} alt="Logo" className="max-w-sm w-full -m-5" />
        <p className="my-2">Providing reliable solutions since 2015</p>
      </aside>
      <nav>
        <h6 className="footer-title -z-10">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href={"/"}>
            <FaFacebook className="w-12 h-12 text-base-content" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin className="w-12 h-12 text-base-content" />
          </Link>
          <Link href={"/"}>
            <FaYoutube className="w-12 h-12 text-base-content" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
