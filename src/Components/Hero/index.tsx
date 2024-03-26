import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import heroImage from "../../assets/hero-image.png";
import { Container } from "../../styles/Global";
import {
  BrandInfosContainer,
  ContentContainer,
  Description,
  DescriptionIcon,
  HeroContainer,
  TextContainer,
  TitleAndSubtitleContainer,
} from "./styles";
export function Hero() {
  return (
    <HeroContainer>
      <Container>
        <ContentContainer>
          <TextContainer>
            <TitleAndSubtitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora{" "}
              </p>
            </TitleAndSubtitleContainer>
            <BrandInfosContainer>
              <Description>
                <DescriptionIcon variant="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </DescriptionIcon>
                <span>Compra simples e segura</span>
              </Description>
              <Description>
                <DescriptionIcon variant="brown">
                  {" "}
                  <Package size={16} weight="fill" />
                </DescriptionIcon>
                <span>Embalagem mantém o café intacto</span>
              </Description>
              <Description>
                <DescriptionIcon variant="yellow">
                  {" "}
                  <Timer size={16} weight="fill" />
                </DescriptionIcon>
                <span>Entrega rápida e rastreada</span>
              </Description>
              <Description>
                <DescriptionIcon variant="purple">
                  {" "}
                  <Coffee size={16} weight="fill" />
                </DescriptionIcon>
                <span>O café chega fresquinho até você</span>
              </Description>
            </BrandInfosContainer>
          </TextContainer>
          <img src={heroImage} />
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
}
