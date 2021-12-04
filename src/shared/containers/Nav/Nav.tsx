import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "Components/Nav";
import { useSelector } from "react-redux";
import { areEqual } from "Utils/equalityChecks";

const NavContainer = function () {
  // Pull the data needed to Render the nav component
  const { title, logoImage, firstName } = useSelector(
    ({ nav: { title, logoImage }, profile: { firstName } }: any) => ({
      title,
      logoImage,
      firstName,
    }),
    areEqual
  );

  // Use history to trigger a route change, when the Welcome link is clicked.
  const navigate = useNavigate();
  const handleWelcomeClick = useCallback((e: any) => {
    e.preventDefault();
    navigate("/profileView");
  }, []);
  const handleHomeClick = useCallback((e: any) => {
    e.preventDefault();
    navigate("/home");
  }, []);

  return (
    <Nav
      title={title}
      logoUrl={logoImage}
      userName={firstName}
      welcomeClick={handleWelcomeClick}
      homeClick={handleHomeClick}
    />
  );
};

export default NavContainer;
