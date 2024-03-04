import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Cart from "./pages/Cart";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:itemID",
          element: <Item />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
