import { type Plant } from "./Plant";

export interface PlantRepository {
  listPlants: () => Promise<Plant[]>;
  listPlantById: () => Promise<Plant>;
}
