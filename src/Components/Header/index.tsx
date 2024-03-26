import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import { Button, Container } from "../../styles/Global";
import {
  HeaderButtonsContainer,
  HeaderContainer,
  NumberOfItemsInCartDisplay,
  ToggleMenu,
} from "./styles";
import { CaretDown, MapPin, ShoppingCart } from "phosphor-react";
import { Cities } from "../../@types/enums/cities";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [city, setCity] = useState("Porto Alegre, RS");
  const { numberOfItemsInCart } = useContext(CartContext);
  const isNumberOfItemsVisible = numberOfItemsInCart > 0;

  return (
    <Container>
      <HeaderContainer>
        <img src={logo} onClick={() => navigate("/")} />
        <HeaderButtonsContainer>
          <Button
            variant="purple"
            isDropdown
            onClick={() => setIsVisible(!isVisible)}
          >
            <MapPin size={22} weight="fill" />
            {city}
            <CaretDown size={18} />
            <ToggleMenu isVisible={isVisible}>
              <div onClick={() => setCity(Cities.CURITIBA)}>
                <MapPin size={22} weight="fill" />
                {Cities.CURITIBA}
              </div>
              <div onClick={() => setCity(Cities.PORTO_ALEGRE)}>
                <MapPin size={22} weight="fill" />
                {Cities.PORTO_ALEGRE}
              </div>
              <div onClick={() => setCity(Cities.RIO_DE_JANEIRO)}>
                <MapPin size={22} weight="fill" />
                {Cities.RIO_DE_JANEIRO}
              </div>
              <div onClick={() => setCity(Cities.SAO_PAULO)}>
                <MapPin size={22} weight="fill" />
                {Cities.SAO_PAULO}
              </div>
            </ToggleMenu>
          </Button>
          <Button variant="yellow" onClick={() => navigate("/checkout")}>
            <ShoppingCart size={32} weight="fill" />
            <NumberOfItemsInCartDisplay isVisible={isNumberOfItemsVisible}>
              {numberOfItemsInCart}
            </NumberOfItemsInCartDisplay>
          </Button>
        </HeaderButtonsContainer>
      </HeaderContainer>
    </Container>
  );
}
