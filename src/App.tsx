import "./App.css";
import logo from "./assets/logo.svg";
import { PlantService } from "./core/services/plantService";
import { useState, useEffect } from "react";
import { type Plant } from "./core/domain/Plant";
import { ApiPlantRepository } from "./core/infrastructure/ApiPlantRepository";
import { PlantList } from "./components/PlantList";
import { SearchBar } from "./components/SearchBar";
import { Link } from "react-router-dom";

function App() {
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
      <header>
        <Link to={"/"}>
          <img src={logo} alt="logo tienda" />
        </Link>
      </header>
      <main>
        <SearchBar setSearch={setSearch} />
        <PlantList plants={filteredPlants} />
      </main>
    </>
  );
}

export default App;
