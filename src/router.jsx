import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddMovie from "./pages/addMovie.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/addMovie", element: <AddMovie/>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
