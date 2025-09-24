import { type Plant } from "../core/domain/Plant";

export const Card = ({ plant }: { plant: Plant }) => {
  return (
    <div className="card">
      <h2 className="nunito-700">{plant.name}</h2>
      <p className="dm-sans-400">{plant.scientificName}</p>
      <img src={plant.image} alt="" />
      {/* <p>€{plant.price}</p> */}
    </div>
  );
};
