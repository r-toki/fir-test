import { createBrowserRouter } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Me from "./pages/me";
import { Root } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/me",
        element: <Me />,
      },
    ],
  },
]);
