import { useContext, createContext, useReducer } from "react";
const AuthContext = createContext();

const FakeUser = {
  email: "user@gmail.com",
  password: "password",
};

const initialState = { user: null, isAuthenticated: false };
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    default:
      return { initialState };
  }
}

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email !== FakeUser.email) alert("provide a valid email");
    if (email === FakeUser.email && password !== FakeUser.password)
      alert("wrong password");
    if (email === FakeUser.email && password === FakeUser.password)
      dispatch({ type: "login", payload: FakeUser });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
