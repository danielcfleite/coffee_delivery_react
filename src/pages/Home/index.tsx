import { coffeesDB } from "../../../fakeDB/coffees";
import { CoffeeSelectionItem } from "../../Components/CoffeeSelectionItem";
import { Hero } from "../../Components/Hero";
import { Container } from "../../styles/Global";
import { ItensDisplay } from "./styles";

export function Home() {
  return (
    <>
      <Hero />
      <Container>
        <ItensDisplay id="coffeeMenu">
          {Object.entries(coffeesDB).map(([id, coffee]) => (
            <CoffeeSelectionItem
              key={id}
              descricao={coffee.descricao}
              img={coffee.img}
              quantidade={coffee.quantidade}
              tags={coffee.tags}
              titulo={coffee.titulo}
              valor={coffee.valor}
            />
          ))}
        </ItensDisplay>
      </Container>
    </>
  );
}
