import { createContext, useState } from "react";
import { getUser } from "../services/Api";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function userSignIn(auth) {
    function success(data) {
      setUser({ ...data });
    }
    getUser(success, auth);
  }

  function userSignOut() {
    setUser({});
  }

  return (
    <UserContext.Provider value={{ user, userSignIn, userSignOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
