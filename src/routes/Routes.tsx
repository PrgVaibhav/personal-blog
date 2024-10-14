import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout/RootLayout";
import { HomePage } from "../pages/home/HomePage";
import { BlogPage } from "../pages/BlogPage/BlogPage";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <h1>404 Not Found</h1>,

      children: [
        { path: "/", element: <HomePage /> },
        { path: "blog/:id", element: <BlogPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
