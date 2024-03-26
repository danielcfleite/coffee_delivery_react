import styled from "styled-components";
import { fontGuide } from "../../styles/themes/fontGuide";
import { PaymentMethods } from "../../@types/enums/paymentMethods";

interface PaymentMethodProps {
  method: PaymentMethods;
  isSelected: boolean;
}

type InputGridProps = {
  size: number | 1;
};

type CheckoutFormContainerProps = {
  mt?: boolean;
  color?: "purple" | "yellow";
};

function getGridTemplate(size: number) {
  switch (size) {
    case 1: {
      return "1fr";
    }
    case 2: {
      return "1fr 1fr";
    }
    case 3: {
      return "1fr 1fr 3.75rem";
    }
  }
}

export const FormTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    gap: 0.125rem;
    color: ${(props) => props.theme.baseText};

    .subtitle {
      font-weight: bold;
      font-size: ${fontGuide.roboto.textM};
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`;

export const CheckoutFormContainer = styled.div<CheckoutFormContainerProps>`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  margin-top: ${(props) => (props.mt ? "0.75rem" : "0")};

  svg {
    color: ${(props) =>
      props.color === "purple" ? props.theme.purple : props.theme.yellow};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  input {
    background-color: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseButton};
    border-radius: 4px;
    padding: 0.75rem;
  }
`;

export const InputGrid = styled.div<InputGridProps>`
  display: grid;
  grid-template-columns: ${(props) => getGridTemplate(props.size)};
  grid-column-gap: 0.75rem;
`;

export const Input = styled.input``;

export const PayingMethodContainer = styled(FormTitle)`
  display: flex;
`;

export const PayingMethodOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  flex: 1;
  margin-top: 2rem;
`;

export const PayingMethodOption = styled.button<PaymentMethodProps>`
  padding: 1rem;
  background-color: ${(props) =>
    props.isSelected ? props.theme.purpleLight : props.theme.baseButton};
  border: 1px solid
    ${(props) => (props.isSelected ? props.theme.purple : "transparent")};
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: ${fontGuide.roboto.textXS};
  cursor: pointer;
`;
