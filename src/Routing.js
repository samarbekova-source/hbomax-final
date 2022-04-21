import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Action from "./components/Action/Action";
import Add from "./components/Add/Add";
import Comedy from "./components/Comedy/Comedy";
import Edit from "./components/Edit/Edit";
import Fantasy from "./components/Fantasy/Fantasy";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import Orders from "./components/Orders/Orders";
import AllProductCard from "./components/ProductCard/AllProductCard";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Details from "./components/Details/Details";
import AdminPage from "./components/AdminPage/AdminPage";
import Chat from "./components/Chat/Chat";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/fantasy",
      element: <Fantasy />,
      id: 2,
    },
    {
      link: "/comedy",
      element: <Comedy />,
      id: 3,
    },
    {
      link: "/action",
      element: <Action />,
      id: 4,
    },
    {
      link: "/add",
      element: <Add />,
      id: 5,
    },

    {
      link: "/cart",
      element: <Cart />,
      id: 7,
    },

    {
      link: "/favorites",
      element: <Favorites />,
      id: 9,
    },
    {
      link: "/orders",
      element: <Orders />,
      id: 10,
    },
    {
      link: "/all",
      element: <AllProductCard />,
      id: 11,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 12,
    },

    {
      link: "/details/:id",
      element: <Details />,
      id: 13,
    },
    {
      link: "/chat",
      element: <Chat />,
      id: 54,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 2,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
