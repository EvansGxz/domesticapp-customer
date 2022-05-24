import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Slider from "./pages/Slider";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </>
  );
// =======

// import Authenticated from "./Auth/Authenticated";
// import { useAuth } from "./context/auth-context";
// import UnAuthenticated from "./Auth/UnAuthenticated";

// function App() {
//   const { user } = useAuth();
//   console.log(user)
//   return user ? <Authenticated /> : <UnAuthenticated />;
// >>>>>>> ec76acdc1b94e3f98b2860b4040cfff1a6b12896
// }
  }
export default App;