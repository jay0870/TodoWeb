import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Login } from "./pages/Login";
import { Register } from "./components/Register";
import PrivateRoutes from "./authGard/PrivateRoutes";
import { Alltodos } from "./pages/allTodos";
import Layout from "./layout/Layout";
import DynamicData from "./pages/DynamicData";
import { ErrorPage } from "./pages/errorPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <HomePage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <AboutPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-todos",
        element: <Alltodos />,
      },
      { path: "/details/:id", element: <DynamicData /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
