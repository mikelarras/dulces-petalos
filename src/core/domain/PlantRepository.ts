import { type Plant } from "./Plant";

export interface PlantRepository {
  listPlants: () => Promise<Plant[]>;
  listPlantById: (plantId: string) => Promise<Plant>;
}
