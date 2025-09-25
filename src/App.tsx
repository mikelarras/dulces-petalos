import "./App.css";
import logo from "./assets/logo.svg";
import { PlantService } from "./core/services/plantService";
import { useState, useEffect } from "react";
import { type Plant } from "./core/domain/Plant";
import { ApiPlantRepository } from "./core/infrastructure/ApiPlantRepository";
import { PlantList } from "./components/PlantList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const plantService = new PlantService(ApiPlantRepository);
    plantService.getPlants().then((resp) => {
      setPlants(resp);
    });
  }, []);

  return (
    <>
      <header>
        <img src={logo} alt="logo tienda" />
      </header>
      <main>
        <SearchBar />
        <PlantList plants={plants} />
      </main>
    </>
  );
}

export default App;
