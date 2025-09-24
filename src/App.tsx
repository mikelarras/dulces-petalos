import "./App.css";
import logo from "./assets/logo.svg";
import { PlantService } from "./core/services/plantService";
import { useState, useEffect } from "react";
import { type Plant } from "./core/domain/Plant";
import { ApiPlantRepository } from "./core/infrastructure/ApiPlantRepository";
import { Card } from "./components/Card";

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
        <div className="searchBar">
          <input type="text" placeholder="Busca en nuestra tienda"></input>
        </div>
        <div className="cardContainer">
          <ul>
            {plants.map((plant) => {
              return (
                <li>
                  <Card plant={plant}></Card>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
