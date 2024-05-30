import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-accent-content">
      <aside>
        <Image
          src={logo}
          alt="Logo"
          className="max-w-sm w-full m-5 bg-white rounded"
        />
        <p className="ml-10 text-base-content">
          Providing reliable solutions since 2015
        </p>
      </aside>
      <nav>
        <h6 className="footer-title -z-10">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/ruhigherstudyclub" target="_blank">
            <FaInstagram className="w-12 h-12 text-base-content" />
          </a>
          <a href="https://www.threads.net/@ruhigherstudyclub" target="_blank">
            <FaThreads className="w-12 h-12 text-base-content" />
          </a>
          <a
            href="https://www.linkedin.com/company/rajshahi-university-higher-study-club/"
            target="_blank"
          >
            <FaLinkedin className="w-12 h-12 text-base-content" />
          </a>
          <a href="https://www.youtube.com/@RUHigherStudyClub" target="_blank">
            <FaYoutube className="w-12 h-12 text-base-content" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
