import Link from "next/link";

const Navigation = ({ classes }: { classes: string }) => {
  return (
    <ul
      tabIndex={0}
      className={
        "menu menu-sm dropdown-content p-2 w-full" +
        classes
      }
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Scholarship</summary>
          <ul className="p-2">
            <li>
              <Link href="/">UK</Link>
            </li>
            <li>
              <Link href="/">US</Link>
            </li>
            <li>
              <Link href="/">Canada</Link>
            </li>
            <li>
              <Link href="/">To Be Continued</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/">Internship/Fellowship</Link>
      </li>
      <li>
        <Link href="/">Exchange Program</Link>
      </li>
      <li>
        <Link href="/">Conference</Link>
      </li>
      <li>
        <Link href="/">Online Courses</Link>
      </li>
      <li>
        <Link href="/">Jobs</Link>
      </li>
      <li>
        <Link href="/">Blog</Link>
      </li>
      <li>
        <details>
          <summary>About Us</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Our Team</Link>
            </li>
            <li>
              <Link href="/">Club History</Link>
            </li>
            <li>
              <Link href="/">Alumni Profile</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Past Events</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Workshop</Link>
            </li>
            <li>
              <Link href="/">Session</Link>
            </li>
            <li>
              <Link href="/">Charity Act</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/">Success Stories</Link>
      </li>
      <li>
        <Link href="/">Join Us</Link>
      </li>
      <li>
        <Link href="/">FAQ</Link>
      </li>
    </ul>
  );
};

export default Navigation;
