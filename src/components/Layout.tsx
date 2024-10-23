import Navbar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
}
