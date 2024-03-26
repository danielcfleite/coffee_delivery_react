import styled from "styled-components";
import { fontGuide } from "../../styles/themes/fontGuide";

export const ItemContainer = styled.div`
  padding: 1.25rem 1.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 100px;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 19.375rem;

  img {
    position: absolute;
    top: -2rem;
  }
`;

export const CategoryTag = styled.span`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  font-size: ${fontGuide.roboto.tag};
  font-weight: bold;
  line-height: 1.3;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TitleAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.0625rem;

  h3 {
    font-size: ${fontGuide.baloo2.titleS};
    font-weight: bold;
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme.baseLabel};
    font-size: ${fontGuide.roboto.textS};
    line-height: 1.3;
    text-align: center;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > div > span {
    font-family: "Baloo 2", sans-serif;
    font-size: ${fontGuide.baloo2.titleM};
    line-height: 1.3;
    color: ${(props) => props.theme.baseText};
    font-weight: 700;
  }
  font-size: ${fontGuide.roboto.textS};
  line-height: 1.3;
`;

export const PurchaseOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AmountSelection = styled.span`
  line-height: 1.3;
  display: flex;
  align-items: center;
  padding: 0.53125rem 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;

  span {
    font-weight: 400;
    font-size: ${fontGuide.roboto.textM};
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`;
