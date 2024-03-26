import styled from "styled-components";
import { AmountSelection } from "../CoffeeSelectionItem/styles";

export const CoffeeCheckoutItemContainer = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  gap: 1.25rem;

  img {
    width: 3.875rem;
    height: 3.875rem;
  }
`;

export const CoffeCheckoutItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const CoffeeCheckoutItemOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const RemoveButton = styled(AmountSelection)`
  text-transform: uppercase;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const Price = styled.span`
  position: absolute;
  top: 0px;
  right: 0.25rem;
`;
