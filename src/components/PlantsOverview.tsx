import { SearchBar } from "./SearchBar";
import { PlantList } from "./PlantList";
import { useState, useEffect } from "react";
import { type Plant } from "../core/domain/Plant";
import { PlantService } from "../core/services/plantService";
import { ApiPlantRepository } from "../core/infrastructure/ApiPlantRepository";

export const PlantsOverview = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const plantService = new PlantService(ApiPlantRepository);
    plantService.getPlants().then((resp) => {
      setPlants(resp);
      setFilteredPlants(resp);
    });
  }, []);

  useEffect(() => {
    const newPlants = filterPlants(plants, search);
    setFilteredPlants(newPlants);
  }, [search]);

  const filterPlants = (plants: Plant[], search: string) => {
    return plants.filter(
      (plant) =>
        plant?.name?.toLowerCase()?.includes(search.toLowerCase()) ||
        plant?.scientificName?.toLowerCase()?.includes(search.toLowerCase())
    );
  };

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </>
  );
};
