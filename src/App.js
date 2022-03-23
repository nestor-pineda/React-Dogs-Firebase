import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Layout from "./components/Layout/Layout";
import Theme from "./theme/Theme";
import { LikeProvider } from "./context/likeContext";

const App = () => {
  return (
    <Router>
      <Theme>
        <LikeProvider>
          <Layout>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Layout>
        </LikeProvider>
      </Theme>
    </Router>
  );
};

export default App;
