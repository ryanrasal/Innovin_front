import Home from "../pages/Home";
import Root from "./Root";

const Routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default Routes;
