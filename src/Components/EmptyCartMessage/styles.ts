import styled, { css } from "styled-components";
import { fontGuide } from "../../styles/themes/fontGuide";
import { Button } from "../../styles/Global";

interface EmptyCartMessageContainer {
  hasError: boolean;
}

export const Message = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    color: ${(props) => props.theme.purple};
  }
  text-transform: uppercase;
  font-size: ${fontGuide.roboto.textM};
  font-weight: bolder;
  margin-bottom: 1rem;
`;

export const TakeToMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: ${fontGuide.roboto.textM};
  font-weight: bolder;
  margin-bottom: 1rem;

  ${Button} {
    background-color: ${(props) => props.theme.purple};

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const EmptyCartMessageContainer = styled.div<EmptyCartMessageContainer>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);

  ${(props) =>
    props.hasError &&
    css`
      @keyframes error {
        0% {
          border: 1px solid transparent;
        }
        25% {
          border: 1px solid red;
        }
        50% {
          border: 1px solid transparent;
        }
        75% {
          border: 1px solid red;
        }
        100% {
          border: 1px solid transparent;
        }
      }

      animation: error 1s linear; // Specify animation name and duration
    `}
`;
