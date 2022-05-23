import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";
import { tokenKey } from "../config";
import { indexCategories } from "../services/categories-services";
import { useAsync } from "../components/hooks/useAsync";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {  data, execute } = useAsync();
  

  useEffect(() => {
    if(sessionStorage.getItem(tokenKey)!==null){
      getUser()
      .then(setUser)
      .catch((error) => console.log(error));
    }

  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigate("/home");
    });
  }

  function handleSignupCustomers(userData) {
    return createUser(userData).then((user) => {
      setUser(user);
      navigate("/customer_profile");
    });
  }

  function handleUpdateCustomer(userData) {
    return updateUser(userData).then((user) => {
      setUser(user);
      navigate("/profile");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigate("/");
    });
  }

// ========================= Category ===============
  function handleIndexCategory() {
    return execute(indexCategories());
  }

// ========================= Services =============


  return (
    <AuthContext.Provider
      value={{
        user,
        update: handleUpdateCustomer,
        categories: data,
        getCategories: handleIndexCategory,
        login: handleLogin,
        customerSignup: handleSignupCustomers,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
