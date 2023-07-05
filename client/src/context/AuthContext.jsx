import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [token, setToken] = useState("");
  const token = localStorage.getItem("token") || "";

  const login = async (email, password) => {
    const response = await fetch("https://urban-interiors-server.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      // Save the auth token and redirect
      alert("Login Successful");
      // setToken(json.authtoken);
      localStorage.setItem("token", JSON.stringify(json.authtoken));
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
