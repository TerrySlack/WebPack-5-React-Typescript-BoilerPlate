import React, { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Nav } from "Containers/Nav";
import { Home } from "Containers/Home";
import DetailView from "Containers/DetailView";
import { ProfileView } from "Containers/ProfileView";

const history = createBrowserHistory();

interface Props {}

const AppRoutes: FC<Props> = function () {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/DetailView" element={<DetailView />} />
        <Route path="/ProfileView" element={<ProfileView />} />
        <Route>404: Page not found</Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes, history };
