import React from "react";
import { CATEGORIES } from "../api/data";

export const CategoriesSelect = ({
  id = "categories",
  name = "categories",
}) => {
  return (
    <>
      <select id={id} name={name} multiple data-type="shared">
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.substring(1).toLowerCase()}
          </option>
        ))}
      </select>
      <span
        style={{
          textTransform: "none",
          textAlign: "left",
          fontSize: ".8rem",
          paddingTop: "3px",
          color: "gray",
        }}
      >
        Select up to 5
      </span>
    </>
  );
};
