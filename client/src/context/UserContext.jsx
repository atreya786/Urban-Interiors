import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);
  //   console.log(token);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const response = await fetch("http://localhost:5000/user", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const userData = await response.json();
        setUser(userData);
      };
      getUser();
    }
  }, []);
  console.log(user);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
