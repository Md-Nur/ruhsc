import Link from "next/link";

const Navigation = ({ classes }: { classes: string }) => {
  return (
    <ul
      tabIndex={0}
      className={
        "menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52" +
        classes
      }
    >
      <li>
        <Link href="/">Item 1</Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Submenu 1</Link>
            </li>
            <li>
              <Link href="/">Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/">Item 3</Link>
      </li>
    </ul>
  );
};

export default Navigation;
