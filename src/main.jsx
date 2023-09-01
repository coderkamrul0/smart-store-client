import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./hooks/useCartContext";
const queryClient = new QueryClient();
import ScrollToTop from "react-scroll-to-top";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ScrollToTop smooth color="#000000" className="ps-[6px]"/>
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
