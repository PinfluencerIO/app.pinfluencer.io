import { Link } from "react-router-dom";
import logo from "../assets/main-logo.png";

export default function LogoHomeLink() {
  return (
    <Link to="/">
      <img style={{ width: "2rem", height: "2rem" }} src={logo} alt="logo" />
    </Link>
  );
}
