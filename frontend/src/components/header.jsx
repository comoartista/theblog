import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="c-container h-[72px]">
      <div className="flex justify-between items-center h-[72px]">
        {" "}
        <Link href="/">Oksana Melyk</Link>
        <Navbar />
      </div>
    </div>
  );
}
