import { useContext, useEffect } from "react";
import { Container } from "../../styles/Global";
// import orderComplete from "../../assets/order-complete.svg";
import {
  IconContainer,
  OrderDetailsBox,
  OrderDetailsContainer,
  OrderInfoContainer,
  OrderInfoItem,
  OrderInfoText,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
import { CartContext } from "../../Contexts/CartContext";

export function OrderDetails() {
  const { deleteAllItems } = useContext(CartContext);
  const { formData, paymentMethod } = useContext(CheckoutContext);
  useEffect(() => {
    deleteAllItems();
  }, []);
  return (
    <Container>
      <OrderDetailsContainer>
        <div>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você.</p>
          </div>
          <OrderDetailsBox>
            <OrderInfoItem>
              <OrderInfoContainer>
                <IconContainer variant="purple">
                  <MapPin size={16} weight="fill" />
                </IconContainer>
                <OrderInfoText>
                  <span>
                    Entrega em <strong>{formData.rua}</strong>
                  </span>
                  <span>
                    {formData.bairro} - {formData.cidade}, {formData.estado}
                  </span>
                </OrderInfoText>
              </OrderInfoContainer>
            </OrderInfoItem>
            <OrderInfoItem>
              <OrderInfoContainer>
                <IconContainer variant="yellow">
                  <Timer size={16} weight="fill" />
                </IconContainer>
                <OrderInfoText>
                  <span>Previsão de entrega</span>
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                </OrderInfoText>
              </OrderInfoContainer>
            </OrderInfoItem>
            <OrderInfoItem>
              <OrderInfoContainer>
                <IconContainer variant="orange">
                  <CurrencyDollar size={16} />
                </IconContainer>
                <OrderInfoText>
                  <span>Pagamento na entrega</span>
                  <span>
                    <strong>{paymentMethod}</strong>
                  </span>
                </OrderInfoText>
              </OrderInfoContainer>
            </OrderInfoItem>
          </OrderDetailsBox>
        </div>
        <div>{/* <img src={orderComplete} /> */}</div>
      </OrderDetailsContainer>
    </Container>
  );
}
