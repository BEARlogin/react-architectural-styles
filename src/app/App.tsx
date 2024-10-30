import { LogoutButton } from "@features/auth";
import { AuthProvider } from "./providers/AuthProvider";
import { MainRouter } from "./routers/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="container">
          <MainRouter />
        </div>
      </AuthProvider> 
    </Router>

  );
};

export default App;
