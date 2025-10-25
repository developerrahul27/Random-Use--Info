import { useState, useEffect } from "react";
import axios from "axios";
import type { ApiResponse, DisplayUser } from "../types";

export const useUser = () => {
  const [user, setUser] = useState<DisplayUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<ApiResponse>(
        "https://randomuser.me/api"
      );
      const result = data.results[0];
      const displayUser: DisplayUser = {
        fullName: `${result.name.title} ${result.name.first} ${result.name.last}`,
        email: result.email,
        location: `${result.location.city}, ${result.location.street.name}, ${result.location.country}`,
      };

      localStorage.setItem("user", JSON.stringify(displayUser));
      setUser(displayUser);
    } catch (err) {
      console.error("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load from localStorage or fetch new
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      fetchUser();
    }
  }, []);

  return { user, loading, fetchUser };
};
