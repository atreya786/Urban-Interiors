import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);
  //   console.log(token);

  const getUser = async () => {
    const response = await fetch("https://urban-interiors-server.vercel.app/user", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const userData = await response.json();
    setUser(userData);
  };
  // console.log(user);

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
