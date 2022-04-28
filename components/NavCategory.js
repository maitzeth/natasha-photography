import React from "react";
import { categoryMenu } from "../helpers/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const NavCategory = () => {
  const router = useRouter();
  return (
    <ul className="flex items-center justify-center space-x-5 h-[50px]">
      {categoryMenu.map((menu, index) => {
        const anchorClasses = classNames(
          "hover:text-white px-2 py-2 font-oswald",
          {
            "text-white": router.route === menu.to,
            "text-gray-400": router.route !== menu.to,
          }
        );

        return (
          <li key={index}>
            <Link href={menu.to}>
              <a className={anchorClasses}>{menu.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavCategory;
