export default function AuthButton({ user }) {
  return user ? <button>Sign Out</button> : <button>Sign In</button>;
}
