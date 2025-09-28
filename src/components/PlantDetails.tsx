import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { PlantService } from "../core/services/plantService";
import { ApiPlantRepository } from "../core/infrastructure/ApiPlantRepository";

export const PlantDetails = () => {
  const params = useParams<{ id: string }>();
  console.log(params);
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
        <span>{` > ${plantDetails.name}`}</span>
      </div>
      <div className="detail">
        <img src={plantDetails.image} alt="" />
      </div>
      <div className="detailsInfo">
        <h1>{plantDetails.name}</h1>
        <p>{plantDetails.scientificName}</p>
        <p>€ {plantDetails.price}</p>
        <p>{plantDetails.water}</p>
        <p>{plantDetails.fertilizer}</p>
      </div>
    </div>
  );
};
