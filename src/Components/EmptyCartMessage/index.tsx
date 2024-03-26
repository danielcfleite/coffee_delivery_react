import { Coffee, SmileySad } from "phosphor-react";
import { EmptyCartMessageContainer, Message, TakeToMenu } from "./styles";
import { Button } from "../../styles/Global";
import { HashLink as Link } from "react-router-hash-link";

interface EmptyCartProps {
  hasError: boolean;
}

export function EmptyCartMessage({ hasError }: EmptyCartProps) {
  return (
    <EmptyCartMessageContainer hasError={hasError}>
      <Message>
        <SmileySad size={32} weight="fill" /> parece que o carrinho está vazio
      </Message>
      <TakeToMenu>
        <Button>
          <Link to="/#coffeeMenu">
            Conheça novos sabores <Coffee size={20} weight="fill" />{" "}
          </Link>
        </Button>
      </TakeToMenu>
    </EmptyCartMessageContainer>
  );
}
