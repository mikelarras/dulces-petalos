import { type PlantRepository } from "../domain/PlantRepository";
import { type Plant } from "../domain/Plant";

const API_BASE_URL = "https://dulces-petalos.jakala.es";
interface ApiPlant {
  binomialName: string;
  fertilizerType: string;
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  wateringsPerWeek: number;
}

export const ApiPlantRepository: PlantRepository = {
  listPlants: async () => {
    const path = `${API_BASE_URL}/api/v1/product`;
    const apiPlantsResponse = await fetch(path);
    const apiPlants = await apiPlantsResponse.json();
    const plants = apiPlants.map((apiPlant: ApiPlant) =>
      transformPlant(apiPlant)
    );
    return plants;
  },

  listPlantById: async (plantId: string) => {
    const path = `${API_BASE_URL}/api/v1/product/${plantId}`;
    const apiPlantResponse = await fetch(path);
    const apiPlant = await apiPlantResponse.json();
    const plant = transformPlant(apiPlant);
    return plant;
  },
};

const transformPlant = (apiPlant: ApiPlant): Plant => {
  return {
    id: apiPlant.id,
    name: apiPlant.name,
    scientificName: apiPlant.binomialName,
    image: apiPlant.imgUrl,
    price: apiPlant.price,
    water: `Regar ${apiPlant.wateringsPerWeek} ${
      apiPlant.wateringsPerWeek === 1 ? "vez" : "veces"
    } por semana`,
    fertilizer: `Fertilizar con ${apiPlant.fertilizerType}`,
  };
};
