import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <ul style={{ display: "flex", padding: "0" }}>
          <li
            style={{
              padding: "0 1%",
              fontWeight: router.pathname === "/" ? "bold" : "normal",
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{
              padding: "0 1%",
              fontWeight: router.pathname === "/following" ? "bold" : "normal",
            }}
          >
            <Link href="/following">Following</Link>
          </li>
          <li
            style={{
              padding: "0 1%",
              fontWeight: router.pathname === "/contact" ? "bold" : "normal",
            }}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
