import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Winter from "../pages/Winter";
import Spring from "../pages/Spring";
import Summer from "../pages/Summer";
import Autumn from "../pages/Autumn";
import SeasonCard from "../components/seasonCard";
import Home from "../pages/home";
import { useLocation } from "react-router";

const cards = [
  { season: "/", img: "/imgs/homeIcon.png" },
  { season: "/winter", img: "/imgs/snowFlakeIcon.png" },
  { season: "/spring", img: "/imgs/leafIcon.png" },
  { season: "/summer", img: "/imgs/flowersIcon.png" },
  { season: "/autumn", img: "/imgs/autumnIcon.png" },
];

const Layout = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <>
      <Outlet />
      <div className="  flex justify-center p-5">
        <div className="grid grid-cols-4 gap-5 w-full lg:w-2/3 md:w-[75vw] absolute bottom-7 px-6">
          {cards
            .filter((card) => card.season !== currentPath)
            .map((card, index) => (
              <SeasonCard key={index} season={card.season} img={card.img} />
            ))}
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "winter", element: <Winter /> },
      { path: "spring", element: <Spring /> },
      { path: "Summer", element: <Summer /> },
      { path: "autumn", element: <Autumn /> },
    ],
  },
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
