import { Container } from "../../styles/Global";
import { CheckoutContainer } from "./styles";
import { CoffeeCheckout } from "../../Components/CoffeeCheckout";
import { CheckoutForm } from "../../Components/CheckoutForm";
import { NotAvailableModal } from "../../Components/NotAvailableModal";

export function Checkout() {
  return (
    <>
      <Container>
        <NotAvailableModal />
        <CheckoutContainer>
          <div>
            <h3>Complete seu pedido</h3>
            <CheckoutForm />
          </div>
          <div>
            <h3>Cafés selecionados</h3>
            <CoffeeCheckout />
          </div>
        </CheckoutContainer>
      </Container>
    </>
  );
}
