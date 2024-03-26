import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import {
  CheckoutInfo,
  CheckoutInfoContainer,
  CoffeeCheckoutContainer,
} from "./styles";
import { CoffeeCheckoutItem } from "../CoffeeCheckoutItem";
import { Button } from "../../styles/Global";
import { formatPrice } from "../../Utils/formatPrice";
import { EmptyCartMessage } from "../EmptyCartMessage";
import { CheckoutContext } from "../../Contexts/CheckoutContext";

export function CoffeeCheckout() {
  const { items, total } = useContext(CartContext);
  const [checkoutTotal, setCheckoutTotal] = useState(total || 0);
  const deliveryPrice = 3.5;
  const isItemsEmpty = items.length === 0;
  const [noItemInCart, setNoItemInCart] = useState(false);

  useEffect(() => {
    setCheckoutTotal(total);
  }, [total, items]);

  const { formSubmit } = useContext(CheckoutContext);

  function submit() {
    if (items.length > 0) {
      formSubmit();
    } else {
      setNoItemInCart(true);
      setTimeout(() => {
        setNoItemInCart(false);
      }, 1100);
    }
  }

  return (
    <>
      <CoffeeCheckoutContainer>
        {isItemsEmpty ? (
          <EmptyCartMessage hasError={noItemInCart} />
        ) : (
          items.map((i) => <CoffeeCheckoutItem key={i.titulo} item={i} />)
        )}

        <CheckoutInfoContainer>
          <CheckoutInfo>
            <span>Total de itens</span> {formatPrice(checkoutTotal)}
          </CheckoutInfo>
          <CheckoutInfo>
            <span>Entrega</span> 3,50
          </CheckoutInfo>
          <CheckoutInfo isTotal>
            <span>Total</span> {formatPrice(checkoutTotal + deliveryPrice)}
          </CheckoutInfo>
        </CheckoutInfoContainer>
        <Button onClick={() => submit()}>Confirmar Pedido</Button>
      </CoffeeCheckoutContainer>
    </>
  );
}
