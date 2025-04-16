import { Link } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="c-container ">
      <ul className="py-[30px] flex flex-col items-center md:flex-row gap-x-[14px] md:flex-wrap text-[20px]">
        <li className="mt-[30px] md:mt-0 order-last md:order-first">© 2023</li>
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
