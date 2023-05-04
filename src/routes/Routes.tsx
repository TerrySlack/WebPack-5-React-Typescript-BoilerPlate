import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { PageRefreshProvider } from "Providers/PageRefresh";
import { Home } from "Containers/Home";
import { Other } from "Containers/Other";

function AppRoutes() {
  return (
    <BrowserRouter>
      <PageRefreshProvider>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/other" element={<Other />} />
          <Route>404: Page not found</Route>
        </Routes>
      </PageRefreshProvider>
    </BrowserRouter>
  );
}

export { AppRoutes };
