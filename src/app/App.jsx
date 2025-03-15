import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../screens/mainLayout";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: {},
    },
  ]);

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
