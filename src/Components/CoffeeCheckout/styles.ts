import styled from "styled-components";
import { Button } from "../../styles/Global";
import { fontGuide } from "../../styles/themes/fontGuide";

interface CheckoutInfoProps {
  isTotal?: boolean;
}

export const CoffeeCheckoutContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;

  ${Button} {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0;
    margin-top: 1.5rem;
    font-size: ${fontGuide.roboto.buttonG};
  }
`;

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckoutInfo = styled.div<CheckoutInfoProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.baseSubtitle};
  font-size: ${(props) =>
    props.isTotal ? fontGuide.roboto.textL : fontGuide.roboto.textS};
  font-weight: ${(props) => (props.isTotal ? "bold" : "regular")};
`;
