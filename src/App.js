import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Layout from "./components/Layout/Layout";
import Theme from "./theme/Theme";

const App = () => {
  return (
    <Router>
      <Theme>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </Theme>
    </Router>
  );
};

export default App;
