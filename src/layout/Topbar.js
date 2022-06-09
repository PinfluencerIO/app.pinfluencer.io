import AuthButton from "../primatives/AuthButton";
import LogoHomeLink from "../primatives/LogoHomeLink";

export default function Topbar({ user }) {
  return (
    <header className="page-header">
      <LogoHomeLink />
      <div>Pinfluencer</div>
      <div>
        <AuthButton user={user} />
      </div>
    </header>
  );
}
