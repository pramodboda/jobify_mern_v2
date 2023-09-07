import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  DashboardHome,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          { path: "add-job", element: <AddJob /> },
          { path: "all-jobs", element: <AllJobs /> },
          { path: "profile", element: <Profile /> },
          { path: "admin", element: <Admin /> },
        ],
      },
    ],
  },

  {
    path: "/error",
    element: <Error />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
