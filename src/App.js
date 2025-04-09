import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Admin from "./Layouts/Admin";
import Auth from "./Layouts/Auth";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout === "admin" ? Admin : Auth;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <route.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
