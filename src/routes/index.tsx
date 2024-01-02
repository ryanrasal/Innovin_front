import OurWines from "../pages/OurWines";
import Home from "../pages/Home";
import Root from "./Root";
import WineDetails from "../pages/WineDetails";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import RootAdmin from "./RootAdmin";
import AdminUser from "../pages/Admin/AdminUser";
import AdminWine from "../pages/Admin/AdminWine";
import Admin from "../pages/Admin/Admin";
import Contact from "@/pages/Contact";
import AdminMessage from "@/pages/Admin/AdminMessage";
import Profil from "@/pages/Profil";
import AdminUpdateWine from "@/pages/Admin/AdminUpdateWine";

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
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
    ],
  },
  {
    path: "/admin",
    element: <RootAdmin />,
    children: [
      {
        index:true,
        element: <Admin />,
      },
      {
        path:"adminUser",
        element: <AdminUser />,
      },
      {
        path:"adminWine",
        element: <AdminWine />,
      },
      {
        path:"adminUpdateWine/:id",
        element: <AdminUpdateWine />,
      },
      {
        path:"adminMessage",
        element: <AdminMessage />,
      },
    ],
  },
];

export default Routes;
