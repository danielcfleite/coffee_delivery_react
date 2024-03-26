import { ReactNode } from "react";
import styled from "styled-components";
import { fontGuide } from "../../styles/themes/fontGuide";

interface NumberOfItemsInCartDisplayProps {
  children: ReactNode;
  isVisible: boolean;
}

interface ToggleMenuProps {
  isVisible: boolean;
}

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    cursor: pointer;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const NumberOfItemsInCartDisplay = styled.span<NumberOfItemsInCartDisplayProps>`
  position: absolute;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: -0.5rem;
  right: -0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
  width: 1.25rem;
  height: 1.25rem;
  font-size: ${fontGuide.roboto.textS};
  font-weight: bold;
  line-height: 130%;
`;

export const ToggleMenu = styled.div<ToggleMenuProps>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: absolute;
  top: 4rem;
  right: 0.1rem;
  background-color: pink;
  height: 10rem;
  width: 15rem;
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  border-radius: 8px;
  padding: 1rem 0;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    padding-bottom: 0.5rem;
    width: 100%;

    &:hover:first-child {
      filter: brightness(0.6);
    }
  }
`;
