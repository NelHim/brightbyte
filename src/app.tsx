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
        // {
        //   path: "/features",
        //   element: <FeaturesPage />,
        // },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        // {
        //   path: "/prices",
        //   element: <PricesPage />,
        // },
        {
          path: "/about",
          element: <AboutPage />,
        },
        // {
        //   path: "/contacts",
        //   element: <ContactsPage />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
