import { useEffect, useState } from "react";
import { axios } from "Utils/api";

interface Props {
  route: string;
  type?: string;
  data?: any;
}
const fetch = ({ route, type = "get", data }: Props) =>
  axios[type](`http://localhost:6069/api/${route}`, data);

const usePhotos = (apiRequest: Props) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(apiRequest)
      .then(({ data }: any) => {
        setPhotos(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(JSON.stringify(error));
      });
  }, [apiRequest]);

  return {
    photos,
    loading,
    error,
  };
};
export { usePhotos };
