import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center h-[72px]">
      <Link href="/">Oksana Melyk</Link>
      <Navbar />
    </div>
  );
}
