import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import UserContext from "../../context/UserContext";
import LogoHomeLink from "../LogoHomeLink";

export default function Topbar() {
  const { user, signin, signout } = useContext(UserContext);

  return (
    <header className="page-header">
      <div>
        <LogoHomeLink />
      </div>
      <h3> Header Component </h3>
      <div>
        {user ? (
          <Stack direction="row" spacing={2}>
            <Avatar
              {...stringAvatar(user.given_name + " " + user.family_name)}
              src={user.picture}
              sx={{ width: 56, height: 56 }}
            />
            <button
              onClick={() => {
                localStorage.setItem("signout", true);
                signout();
              }}
            >
              Sign Out
            </button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 56, height: 56 }} />
            <button onClick={() => signin()}>Sign In</button>
          </Stack>
        )}
      </div>
    </header>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
