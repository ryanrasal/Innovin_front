import OurWines from "../pages/OurWines";
import Home from "../pages/Home";
import Root from "./Root";
import WineDetails from "../pages/WineDetails";

const Routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ourWines",
        element: <OurWines />,
      },
      {
        path: "wine/:id",
        element: <WineDetails />,
      },
    ],
  },
];

export default Routes;
