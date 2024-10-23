import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ textAlign: "center", padding: "5%" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}
