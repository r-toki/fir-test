import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <div>
      <div className="space-x-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/me">Me</Link>
      </div>
      <Outlet />
    </div>
  );
}
