import { useNavigate } from "react-router-dom";

import { Home } from "Components/Home";

const HomeContainer = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("../other");
  };

  return <Home title="Welcome Home" onClick={onClick} />;
};

export { HomeContainer as Home };
