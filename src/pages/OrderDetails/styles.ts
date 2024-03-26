import styled from "styled-components";

interface IconContainerProps {
  variant: "purple" | "orange" | "yellow";
}

export const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4.5rem;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const OrderInfoItem = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const OrderDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  width: 32.875rem;
  border: 1px solid pink;
  margin-top: 2rem;
  border-radius: 6px 36px 6px 36px;
`;

export const OrderInfoText = styled.div`
  display: flex;
  flex-direction: column;
  appearance: 0.5rem;
`;

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "yellow":
        return props.theme.yellow;
      case "purple":
        return props.theme.purple;
      case "orange":
        return props.theme.yellowDark;
      default:
        return props.theme.yellow;
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`;
