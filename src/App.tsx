import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Contexts/CartContext";
import { Router } from "./Router";
import { CheckoutProvider } from "./Contexts/CheckoutContext";

export function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <CheckoutProvider>
            <Router />
          </CheckoutProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
