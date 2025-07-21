// 控制畫面切換的地方
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import AlbumPage from "./pages/AlbumPage";
import Events from "./pages/Events";
import CartPage from "./pages/CartPage";
import ShippingForm from "./pages/ShippingForm";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/music", element: <Music /> },
  { path: "/album/:id", element: <AlbumPage /> },
  { path: "/events", element: <Events /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/shippingForm", element: <ShippingForm /> },
]);
