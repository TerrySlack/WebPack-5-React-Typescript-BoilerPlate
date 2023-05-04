import { Other } from "Components/Other";

function OtherContainer() {
  // Only render if our api call is not loading, there is no error and some photos have been returned
  return <Other title="Welcome Other" />;
}

export { OtherContainer as Other };
