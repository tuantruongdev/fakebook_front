import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import LoginPage from "./login/LoginPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("token");
  });
  const onLogin = (token) => {
    setIsLoggedIn(token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("imageUrl");
    setIsLoggedIn(null);
  };

  // useEffect(, []);
  return (
    <div className="App">
      {isLoggedIn !== null ? (
        <Home onLogout={logoutHandler} />
      ) : (
        <LoginPage onlogin={onLogin} />
      )}
    </div>
  );
}

export default App;
