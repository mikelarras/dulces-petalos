import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlantService } from "../core/services/plantService";
import { ApiPlantRepository } from "../core/infrastructure/ApiPlantRepository";

export const PlantDetails = () => {
  const params = useParams<{ id: string }>();
  const [plantDetails, setPlantDetails] = useState({
    id: null,
    name: null,
    scientificName: null,
    image: null,
    price: null,
    water: null,
    fertilizer: null,
  });

  useEffect(() => {
    const plantService = new PlantService(ApiPlantRepository);
    plantService.getPlantById(params.id!).then((resp) => {
      setPlantDetails(resp);
    });
  }, [params]);

  return (
    <div className="detailsContainer">
      <div className="breadCrumbs">
        <Link to={"/"}>Inicio</Link>
        <span>{">"}</span>
        <span>{plantDetails.name}</span>
      </div>
      <div className="detailsInfo">
        <img src={plantDetails.image!} alt="plant details image" />
        <div className="detailsText nunito-500">
          <h1>{plantDetails.name}</h1>
          <p className="detailsScientificName">{plantDetails.scientificName}</p>
          <p className="detailsPrice nunito-700">€ {plantDetails.price}</p>
          <ul>
            <li>{plantDetails.water}</li>
            <li>{plantDetails.fertilizer}</li>
          </ul>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};
