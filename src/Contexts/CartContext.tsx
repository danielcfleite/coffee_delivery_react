import { ReactNode, createContext, useEffect, useState } from "react";

export interface Item {
  titulo: string;
  descricao: string;
  valor: number;
  img: string;
  quantidade: number;
}

interface CartContextType {
  numberOfItemsInCart: number;
  items: Item[];
  total: number;
  addItemToCart: (item: Item) => void;
  increaseItemQuantity: (title: string) => void;
  decreaseItemQuantity: (title: string) => void;
  removeItemFromCart: (title: string) => void;
  deleteAllItems: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itemsLocal = localStorage.getItem(
      "@coffee-delivery:items-state-1.0.0"
    );
    if (itemsLocal) {
      const itemsToAdd: Item[] = JSON.parse(itemsLocal);
      setCartItems(itemsToAdd);
    }
    setIsInitialRender(false);
  }, []);

  useEffect(() => {
    if (!isInitialRender) {
      const stateJSON = JSON.stringify(cartItems);
      localStorage.setItem("@coffee-delivery:items-state-1.0.0", stateJSON);
    }
    setTotal(getTotal());
  }, [cartItems, total]);

  const [isInitialRender, setIsInitialRender] = useState(true);

  function saveToLocal() {
    const stateJSON = JSON.stringify(cartItems);
    localStorage.setItem("@coffee-delivery:items-state-1.0.0", stateJSON);
  }

  function getTotal() {
    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = item.valor * item.quantidade;
      return total + itemPrice;
    }, 0);

    return totalPrice;
  }

  const addItemToCart = (item: Item) => {
    const itemName = item.titulo;
    const itemExists = cartItems.some((item) => item.titulo === itemName);
    if (itemExists) {
      alert("já adicionado");
    } else {
      item.quantidade = 1;
      setCartItems((prevItems) => [...prevItems, item]);
      setTotal(getTotal());
    }
    setTotal(getTotal());
  };

  const removeItemFromCart = (title: string) => {
    const newCart = cartItems.filter((i) => i.titulo !== title);
    setCartItems(newCart);
    setTotal(getTotal());
  };

  const increaseItemQuantity = (title: string) => {
    const item = cartItems.find((item) => item.titulo === title);
    if (item) {
      if (item.quantidade === 0) {
        addItemToCart(item);
        item.quantidade = 1;
        setTotal(getTotal());
      } else {
        item.quantidade++;
        setTotal(getTotal());
        saveToLocal();
      }
    }
  };

  const decreaseItemQuantity = (title: string) => {
    const item = cartItems.find((item) => item.titulo === title);
    if (item) {
      if (item.quantidade >= 1) {
        item.quantidade--;
        setTotal(getTotal());
        saveToLocal();
      }

      if (item.quantidade === 0) {
        setTotal(getTotal());
        removeItemFromCart(item.titulo);
      }
    }
  };

  const deleteAllItems = () => {
    cartItems.forEach((i) => {
      removeItemFromCart(i.titulo);
    });
  };

  const numberOfItemsInCart = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        numberOfItemsInCart,
        items: cartItems,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        total,
        deleteAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext({} as CartContextType);
