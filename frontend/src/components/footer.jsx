import { Link } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="c-container w-screen">
      <ul className="py-[30px] flex flex-col flex-wrap items-center sm:flex-row gap-x-[14px] text-[20px]">
        <li className="mt-[30px] sm:mt-0 order-last sm:order-first">© 2025</li>
        <li>
          <a>Twitter </a>
        </li>
        <li>
          <a>LinkedIn</a>
        </li>

        <li>
          <a>Email </a>
        </li>
        <li>
          <a>RSS feed </a>
        </li>
        <li>
          <a>Add to Feedly </a>
        </li>
      </ul>
    </div>
  );
}
