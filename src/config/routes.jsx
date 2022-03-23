import Home from "../pages/Home/Home";
import Single from "../pages/Single/Single";
import Liked from "../pages/Liked";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/animal/:slug",
    element: <Single />,
  },
  {
    path: "/liked",
    element: <Liked />,
  },
];

export default routes;
