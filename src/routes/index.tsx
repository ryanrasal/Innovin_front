import OurWines from "../pages/OurWines";
import Home from "../pages/Home";
import Root from "./Root";
import WineDetails from "../pages/WineDetails";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default Routes;
