import "./App.css";
import logo from "./assets/logo.svg";
import { PlantService } from "./core/services/plantService";
import { useState, useEffect } from "react";
import { type Plant } from "./core/domain/Plant";
import { ApiPlantRepository } from "./core/infrastructure/ApiPlantRepository";
import { Card } from "./components/Card";
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
        <ul>
          {plants.map((plant) => {
            return (
              <li key={plant.id}>
                <Card plant={plant}></Card>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
