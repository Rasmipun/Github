import { useState, useCallback, useEffect } from "react";
import { Header } from "../Components";

const useFetchUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");
    const response = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
            "Authorization":
              `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
          },
      }
    );
    const data = await response.json();
    if (response.status === 404) {
      setError("User not found");
      setLoading(false);
      return;
    }
    if (response.status !== 200) {
      setError("something went wrong");
      setLoading(false);
      return;
    }
    setUser(data);
    setLoading(false);
  }, [username, setUser]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    user,
    loading,
    error,
  };
};

export default useFetchUser;
