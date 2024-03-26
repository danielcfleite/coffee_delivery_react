import styled from "styled-components";
import heroBackground from "../../assets/background-hero.svg";
import { fontGuide } from "../../styles/themes/fontGuide";
import { ReactNode } from "react";

interface DescriptionIconsProps {
  children: ReactNode;
  variant?: "yellowDark" | "yellow" | "brown" | "purple";
}

export const HeroContainer = styled.div`
  padding: 92px 0;
  background: ${`url(${heroBackground})`};
  background-position: cover;
  height: 34rem;
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const InfoContainer = styled.div`
  width: 36.75rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;

  h1 {
    font-size: ${fontGuide.baloo2.titleXL};
    color: ${(props) => props.theme.baseTitle};
    line-height: 1.3;
    font-weight: bolder;
  }

  p {
    font-size: ${fontGuide.roboto.textL};
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const BrandInfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  justify-content: center;
`;

export const DescriptionIcon = styled.div<DescriptionIconsProps>`
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "yellowDark":
        return props.theme.yellowDark;
      case "yellow":
        return props.theme.yellow;
      case "brown":
        return props.theme.baseText;
      case "purple":
        return props.theme.purple;
      default:
        return props.theme.yellow; // Default background color: ;
    }
  }};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;
