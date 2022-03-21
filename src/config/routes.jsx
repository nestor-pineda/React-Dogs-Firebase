import Home from "../pages/Home";
import Single from "../pages/Single";
import Liked from "../pages/Liked";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/animal/:id",
    element: <Single />,
  },
  {
    path: "/liked",
    element: <Liked />,
  },
];

export default routes;
