import { type PlantRepository } from "../domain/PlantRepository";

export class PlantService {
  private plantRepository: PlantRepository;

  constructor(plantRepository: PlantRepository) {
    this.plantRepository = plantRepository;
  }

  async getPlants() {
    const plants = await this.plantRepository.listPlants();
    return plants;
  }
  async getPlantById(plantId: string) {
    const plant = await this.plantRepository.listPlantById(plantId);
    return plant;
  }
}
