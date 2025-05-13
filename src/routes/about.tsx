import { Link } from "react-router";

export default function Component() {
  const apiKey = import.meta.env.VITE_NEW_API_KEY;
  return (
    <div>
      <h1>About</h1>
      <p>New changes</p>
      {apiKey}
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
