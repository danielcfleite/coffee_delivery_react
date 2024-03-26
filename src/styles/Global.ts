import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  variant?: "purple" | "yellow" | "purpleDark";
  isDropdown?: boolean;
}

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    scroll-behavior: smooth;
}

body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
}

h1, h2, h3{
    font-family: "Baloo 2", sans-serif;
}
`;

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  width: 100%;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "yellow":
        return props.theme.yellowLight;
      case "purple":
        return props.theme.purpleLight;
      case "purpleDark":
        return props.theme.purpleDark;
      default:
        return props.theme.yellow; // Default background color: ;
    }
  }};
  border: none;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  color: ${(props) => {
    switch (props.variant) {
      case "yellow":
        return props.theme.yellowDark;
      case "purple":
        return props.theme.purpleDark;
      case "purpleDark":
        return props.theme.white;
      default:
        return props.theme.yellow; // Default background color: ;
    }
  }};
`;
