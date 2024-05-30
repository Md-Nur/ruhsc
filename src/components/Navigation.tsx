import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navigation = ({ classes }: { classes: string }) => {
  return (
    <ul
      tabIndex={0}
      className={"menu menu-sm dropdown-content p-2 w-full" + classes}
    >
      <li className="mb-5">
        <Link className="flex bg-white items-center justify-center" href="/">
          <Image src={logo} alt="Logo" height={40} />
        </Link>
      </li>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Scholarship</summary>
          <ul className="p-2">
            <li>
              <Link href="/scholarship/uk">UK</Link>
            </li>
            <li>
              <Link href="/scholarship/usa">USA</Link>
            </li>
            <li>
              <Link href="/scholarship/canada">Canada</Link>
            </li>
            <li>
              <Link href="/scholarship/other">Other</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/fellowship">Internship/Fellowship</Link>
      </li>
      <li>
        <Link href="/exchange-program">Exchange Program</Link>
      </li>
      <li>
        <Link href="/conference">Conference</Link>
      </li>
      <li>
        <Link href="/online-courses">Online Courses</Link>
      </li>
      <li>
        <Link href="/jobs">Jobs</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <details>
          <summary>About Us</summary>
          <ul className="p-2">
            <li>
              <Link href="/about-us/our-team">Our Team</Link>
            </li>
            <li>
              <Link href="/about-us/club-history">Club History</Link>
            </li>
            <li>
              <Link href="/about-us/alumni-profile">Alumni Profile</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Past Events</summary>
          <ul className="p-2">
            <li>
              <Link href="/past-events/workshop">Workshop</Link>
            </li>
            <li>
              <Link href="/past-events/session">Session</Link>
            </li>
            <li>
              <Link href="/past-events/charity-act">Charity Act</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/success-stories">Success Stories</Link>
      </li>
      <li>
        <Link href="/join-us">Join Us</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
    </ul>
  );
};

export default Navigation;
