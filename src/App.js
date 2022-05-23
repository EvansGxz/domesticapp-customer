import Authenticated from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import UnAuth from "./UnauthenticatedApp";


function App() {
  const { user } = useAuth();
  console.log(user)
  return user ? <Authenticated /> : <UnAuth />;
}

export default App;
