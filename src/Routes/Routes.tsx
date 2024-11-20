import { lazy } from "react";
import { Routes, Route } from "react-router";

const Trending = lazy(() => import("../Pages/Trending"));
const Join = lazy(() => import("../Pages/Join"));
const Search = lazy(() => import("../Pages/Search"));
const Login = lazy(() => import("../Pages/Login"));
const Detail = lazy(() => import("../Pages/Detail"));
const Edit = lazy(() => import("../Pages/Edit"));
const NotFound = lazy(() => import("../Pages/NotFound"));

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route index element={<Trending />} />
      <Route path="join" element={<Join />} />
      <Route path="login" element={<Login />} />
      <Route path="search" element={<Search />} />
      <Route path="video">
        <Route path=":id" element={<Detail />} />
        <Route path="edit" element={<Edit />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
