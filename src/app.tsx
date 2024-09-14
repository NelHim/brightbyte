import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import AboutPage from "./pages/about-page";
import HomePage from "./pages/home-page";
import ServicesPage from "./pages/services-page";
import MainLayout from "./routes/main-layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
