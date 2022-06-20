import React from "react";
import { VALUES } from "../static/data";

export const ValuesSelect = ({ id = "values", name = "values" }) => {
  console.log(id);
  return (
    <>
      <select id={id} name={name} multiple data-type="shared">
        {VALUES.map((value) => (
          <option key={value} value={value}>
            {value[0].toUpperCase() + value.substring(1).toLowerCase()}
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
