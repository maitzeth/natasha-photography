import React from "react";
import { categoryMenu } from "../helpers/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const NavCategory = () => {
  const router = useRouter();
  console.log({ router: router.route });
  return (
    <ul className="category-menu flex space-x-5 fixed left-2/4">
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
