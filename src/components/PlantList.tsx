import { Card } from "./Card";
import { type Plant } from "../core/domain/Plant";

export const PlantList = ({ plants }: { plants: Plant[] }) => {
  return (
    <ul className="cardList">
      {plants.map((plant) => {
        return (
          <li key={plant.id}>
            <Card plant={plant}></Card>
          </li>
        );
      })}
    </ul>
  );
};
