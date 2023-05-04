import { useNavigate } from "react-router-dom";

import { Home } from "Components/Home";

function HomeContainer() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("../other");
  };

  // Only render if our api call is not loading, there is no error and some photos have been returned
  return <Home title="Welcome Home" onClick={onClick} />;
}

export { HomeContainer as Home };
