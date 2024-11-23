import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <Outlet />
      <footer>JS</footer>
    </div>
  );
}
