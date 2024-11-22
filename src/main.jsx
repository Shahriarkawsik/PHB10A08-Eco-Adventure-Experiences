import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import Root from "./Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import TourDetails from "./components/AdventureTour/TourDetails";
import AdventureTour from "./components/AdventureTour/AdventureTour";
import Destination from "./components/Destinations/Destinations";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import DestinationInfo from "./components/DestinationInfo/DestinationInfo";
import Event from "./components/Event/Event";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/adventures",
        element: <AdventureTour />,
      },
      {
        path: "/tourDetails/:id",
        element: (
          <PrivateRoutes>
            <TourDetails></TourDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/eco.json"),
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/destination/:destId",
        element: (
          <PrivateRoutes>
            <DestinationInfo></DestinationInfo>
          </PrivateRoutes>
        ),
        loader: () => fetch("/destination.json"),
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1500} />
    </AuthProvider>
  </StrictMode>
);
