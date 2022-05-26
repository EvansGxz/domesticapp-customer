import Authenticated from "./Auth/Authenticated";
import { useAuth } from "./context/auth-context";
import UnAuthenticated from "./Auth/UnAuthenticated";

 function App() {
   const { user } = useAuth();
   return user ? <Authenticated /> : <UnAuthenticated />;

 }

export default App;