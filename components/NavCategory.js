import React from "react";
import { categoryMenu } from "../helpers/constants";
import classNames from "classnames";

const NavCategory = ({ setCategory, selectedCategory }) => {
  return (
    <ul className="category-menu flex space-x-5 fixed left-2/4">
      {categoryMenu.map((menu, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => setCategory(menu.to)}
              className={classNames("nav-text", {
                "text-white": selectedCategory === menu.to,
                "text-gray-400": selectedCategory !== menu.to,
              })}
            >
              {menu.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavCategory;
