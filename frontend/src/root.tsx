import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="container mx-auto py-4 prose max-w-screen-lg">
      <div className="space-y-4">
        <div className="space-x-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/me">Me</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
