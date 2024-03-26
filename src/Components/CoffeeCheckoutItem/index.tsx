import { Minus, Plus, Trash } from "phosphor-react";
import { AmountSelection } from "../CoffeeSelectionItem/styles";
import { CartContext, Item } from "../../Contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import {
  CoffeCheckoutItemInfo,
  CoffeeCheckoutItemContainer,
  CoffeeCheckoutItemOptions,
  Price,
  RemoveButton,
} from "./styles";
import { formatPrice } from "../../Utils/formatPrice";

interface Props {
  item: Item;
}

export function CoffeeCheckoutItem({ item }: Props) {
  const {
    items,
    increaseItemQuantity,
    decreaseItemQuantity,
    addItemToCart,
    removeItemFromCart,
  } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const { img, quantidade, titulo, valor } = item;
  //valor
  function handleAdd() {
    const isItemAdded = items.find((item) => item.titulo === titulo);
    if (isItemAdded) {
      setQuantity((prev) => prev + 1);
      increaseItemQuantity(titulo);
    } else {
      addItemToCart(item);
      setQuantity(1);
    }
  }

  function handleSubtract() {
    if (quantity === 1) {
      removeItemFromCart(titulo);
      setQuantity(0);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      decreaseItemQuantity(titulo);
    }
  }

  useEffect(() => {
    const itemAlreadyInCart = items.find((i) => i.titulo === titulo);

    if (itemAlreadyInCart) {
      setQuantity(itemAlreadyInCart.quantidade);
    }
  }, [items, titulo]);

  return (
    <>
      <CoffeeCheckoutItemContainer>
        <img src={img}></img>
        <CoffeCheckoutItemInfo>
          <span>{titulo}</span>
          <CoffeeCheckoutItemOptions>
            <AmountSelection>
              <button>
                <Minus
                  size={14}
                  weight="bold"
                  onClick={() => handleSubtract()}
                />
              </button>{" "}
              <span>{quantidade}</span>{" "}
              <button>
                <Plus size={14} weight="bold" onClick={() => handleAdd()} />
              </button>
            </AmountSelection>
            <RemoveButton onClick={() => removeItemFromCart(titulo)}>
              {" "}
              <Trash />
              remover
            </RemoveButton>
          </CoffeeCheckoutItemOptions>
          <Price>{formatPrice(valor)}</Price>
        </CoffeCheckoutItemInfo>
      </CoffeeCheckoutItemContainer>
    </>
  );
}
