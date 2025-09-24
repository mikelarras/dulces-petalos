import { type PlantRepository } from "../domain/PlantRepository";

const API_BASE_URL = "https://dulces-petalos.jakala.es";

export const ApiPlantRepository: PlantRepository = {
  listPlants: async () => {
    const path = `${API_BASE_URL}/api/v1/product`;
    const apiPlantsResponse = await fetch(path);
    const apiPlants = await apiPlantsResponse.json();
    return apiPlants;
  },

  listPlantById: async (plantId: string) => {
    const path = `${API_BASE_URL}/api/v1/product/${plantId}`;
    const apiPlantResponse = await fetch(path);
    const apiPlant = await apiPlantResponse.json();
    return apiPlant;
  },
};
