import { lazy } from "react";
import { Routes, Route } from "react-router";

import GlobalLayout from "../Layouts/GlobalLayout";

const Trending = lazy(() => import("../Pages/Trending"));
const Join = lazy(() => import("../Pages/Join"));
const Search = lazy(() => import("../Pages/Search"));
const Login = lazy(() => import("../Pages/Login"));
const Detail = lazy(() => import("../Pages/Detail"));
const Edit = lazy(() => import("../Pages/Edit"));
const Upload = lazy(() => import("../Pages/Upload"));
const NotFound = lazy(() => import("../Pages/NotFound"));

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Trending />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="video">
          <Route path="upload" element={<Upload />} />
          <Route path="edit" element={<Edit />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
