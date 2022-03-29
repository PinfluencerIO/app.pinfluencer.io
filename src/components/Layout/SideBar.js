import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SidebarItemsBrand } from "./SidebarItems";
import { Link } from "react-router-dom";

function Sidebar({ history }) {
  const location = history.location;
  if (location === "/") history.push("/dashboard");
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  console.log(
    "Sidebar localStorage.getItem('lastActiveIndex') ",
    lastActiveIndexString
  );
  const lastActiveIndex = Number(lastActiveIndexString);
  console.log("Sidebar asNumber ", lastActiveIndex);

  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex === -1 ? 0 : lastActiveIndex
  );

  console.log("Sidebar activeIndex", activeIndex);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    console.log("Sidebar.effect location", location.pathname);
    const activeItem = SidebarItemsBrand.findIndex((item) => {
      console.log("Sidebar.effect item", item.route);
      console.log("Sidebar.effect location.pathname", location.pathname);
      return getPath(item.route) === getPath(location.pathname);
    });
    console.log("Sidebar.effect activeIndex changed", activeItem);
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <SidebarParent>
      <div style={{ position: "fixed" }}>
        {SidebarItemsBrand.map((item, index) => {
          return (
            <Link key={item.name} to={item.route}>
              <SidebarItem key={item.name} active={index === activeIndex}>
                <p>{item.name}</p>
              </SidebarItem>
            </Link>
          );
        })}
      </div>
      <div className="behind-the-scenes" />
    </SidebarParent>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: var(--secondary-color);

  a {
    text-decoration: none;
  }

  & > div {
    width: 250px;
  }

  .behind-the-scenes {
    width: 250px;
  }
`;

const SidebarItem = styled.div`
  padding: 1em;
  transition: all 0.25s ease-in-out;
  background: ${({ active }) => (active ? "var(--primary-color)" : "")};
  margin: 4px 12px;
  border-radius: 5px;

  p {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

  // &:hover {
  //   cursor: pointer;
  // }

  &:hover:not(:first-child) {
    background: pink;
  }
`;
