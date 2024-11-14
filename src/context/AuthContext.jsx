// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when the app loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check the authentication status from the backend
        const response = await axios.get("http://localhost:3001/api/auth/status", { withCredentials: true });
        console.log(response);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error checking authentication status:", error);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};