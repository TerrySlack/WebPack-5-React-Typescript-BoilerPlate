import React from "react";

import { Home } from "Components/Home";

const HomeContainer = function () {
  // Only render if our api call is not loading, there is no error and some photos have been returned
  return <Home title="Welcome Home" />;
};

export { HomeContainer as Home };
