import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Button, Container } from "../../styles/Global";
import {
  AmountSelection,
  CategoryTag,
  ItemContainer,
  ItemFooter,
  PurchaseOptions,
  TagsContainer,
  TitleAndDescriptionContainer,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../Utils/formatPrice";

interface CoffeeSelectionItemProps {
  titulo: string;
  descricao: string;
  valor: number;
  img: string;
  tags: string[];
  quantidade: number;
}

export function CoffeeSelectionItem({
  descricao,
  img,
  tags,
  titulo,
  valor,
}: CoffeeSelectionItemProps) {
  const {
    addItemToCart,
    items,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = useContext(CartContext);
  const [quantity, setQuatity] = useState(0);
  const item = {
    titulo,
    descricao,
    valor,
    img,
    quantidade: quantity,
  };

  const navigate = useNavigate();

  useEffect(() => {
    const itemAlreadyInCart = items.find((i) => i.titulo === titulo);

    if (itemAlreadyInCart) {
      setQuatity(itemAlreadyInCart.quantidade);
    }
  }, [items, titulo]);

  function handleAdd() {
    const isItemAdded = items.find((item) => item.titulo === titulo);
    if (isItemAdded) {
      setQuatity((prev) => prev + 1);
      increaseItemQuantity(item.titulo);
    } else {
      addItemToCart(item);
      setQuatity(1);
    }
  }

  function handleSubtract() {
    if (quantity === 1) {
      removeItemFromCart(item.titulo);
      setQuatity(0);
    } else if (quantity > 1) {
      setQuatity((prev) => prev - 1);
      decreaseItemQuantity(item.titulo);
    }
  }

  return (
    <Container>
      <ItemContainer>
        <img src={img} alt={titulo} />
        <TagsContainer>
          {tags.map((tag) => (
            <CategoryTag>{tag}</CategoryTag>
          ))}
        </TagsContainer>
        <TitleAndDescriptionContainer>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </TitleAndDescriptionContainer>
        <ItemFooter>
          <div>
            <span>{formatPrice(valor)}</span>{" "}
          </div>
          <PurchaseOptions>
            <AmountSelection>
              <button>
                <Minus
                  size={14}
                  weight="bold"
                  onClick={() => handleSubtract()}
                />
              </button>{" "}
              <span>{quantity}</span>{" "}
              <button>
                <Plus size={14} weight="bold" onClick={() => handleAdd()} />
              </button>
            </AmountSelection>
            <Button variant="purpleDark" onClick={() => navigate("/checkout")}>
              <ShoppingCart size={22} weight="fill" />
            </Button>
          </PurchaseOptions>
        </ItemFooter>
      </ItemContainer>
    </Container>
  );
}
