import React, { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Home } from "Containers/Home";

const history = createBrowserHistory();

interface Props {}

const AppRoutes: FC<Props> = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route>404: Page not found</Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes, history };
