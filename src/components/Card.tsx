import { type Plant } from "../core/domain/Plant";
import arrow from "../assets/arrow.svg";

export const Card = ({ plant }: { plant: Plant }) => {
  return (
    <>
      <div className="card-text">
        <h2 className="nunito-700">{plant.name}</h2>
        <p className="dm-sans-400">{plant.scientificName}</p>
      </div>
      <div>
        <img src={plant.image} alt="" />
        <div className="floating-items">
          <div className="price">
            <p className="nunito-500">€ {plant.price}</p>
          </div>
          <div className="arrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
