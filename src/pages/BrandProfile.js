import React from "react";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import PhotoCameraTwoToneIcon from "@mui/icons-material/PhotoCameraTwoTone";
import { useEffect } from "react";
import { getBrand } from "../fake_db/data";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export const BrandProfile = () => {
  const { user } = useContext(UserContext);
  const [brand, setBrand] = useState();

  useEffect(() => {
    const brand = getBrand(); //todo replace with call to api
    setBrand(brand);
  }, [brand]);

  return (
    <div className="profileContainer">
      <div className="profileTop">
        <div className="profileTopInnerContainer">
          <div className="splash"></div>
          <div className="brandLogo">
            <img
              width="70px"
              height="70px"
              src={brand?.image_bytes}
              alt="logo"
            ></img>
          </div>
          <div className="brandDetails">
            <div className="brandDetailsLeft">
              <h3>{brand?.brandName}</h3>
              <div className="brandDescription">{brand?.brandDescription}</div>
            </div>
            <div className="brandDetailsRight">
              <div className="div1">
                <LanguageTwoToneIcon />
              </div>
              <div className="div2 gray-label">Website</div>
              <div className="div3">{brand?.website}</div>
              <div className="div4">
                <PhotoCameraTwoToneIcon />
              </div>
              <div className="div5 gray-label">Instagram name</div>
              <div className="div6">{brand?.instaHandle}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileBottomLeft">
        <h3>About us</h3>
        <div className="name">
          <div className="gray-label">Name</div>
          <div>
            {user?.given_name} {user?.family_name}
          </div>
        </div>
        <div className="email">
          <div className="gray-label">Email</div>
          <div>{user?.email}</div>
        </div>
      </div>
      <div className="profileBottonRight">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            {brand?.categories.map((c) => (
              <li key={c}>
                <div>{c}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="values">
          <h3>Values</h3>
          <ul>
            {brand?.values.map((v) => (
              <li key={v}>
                <div>{v}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
