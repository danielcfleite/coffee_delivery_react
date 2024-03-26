import styled from "styled-components";

interface ModalContainerProps {
  isOpen: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  z-index: 1;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 25vw;
  width: 50vw;
  height: 50vh;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    > svg {
      color: ${(props) => props.theme.yellow};
    }
  }

  .closeButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    :hover {
      filter: brightness(1.1);
    }
  }
`;
