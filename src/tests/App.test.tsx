import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { PlantService } from "../core/services/plantService";
import { ApiPlantRepository } from "../core/infrastructure/ApiPlantRepository";
import { type Plant } from "../core/domain/Plant";

const mockedResponse: Plant[] = [
  {
    fertilizer: "phosphorus",
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    image: "https://dulces-petalos.jakala.es/images/ophrysTenthredinifera.jpeg",
    name: "Orquídea",
    price: 4.95,
    scientificName: "Ophrys tenthredinifera",
    water: "Regar 1 vez por semana",
  },
  {
    fertilizer: "nitrogen",
    id: "ND1elEt4nqZrCeFflDUZ2",
    image: "https://dulces-petalos.jakala.es/images/rosaDamascena.jpeg",
    name: "Rosa de damasco",
    price: 10.5,
    scientificName: "Rosa damascena",
    water: "Regar 3 veces por semana",
  },
];

describe("App component", () => {
  beforeEach(async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockedResponse,
    } as Response);
    const plantService = new PlantService(ApiPlantRepository);
    await plantService.getPlants();
  });
  it("should render the header", async () => {
    render(<App />);

    const logo = await screen.findByAltText("logo tienda");

    expect(logo).toBeInTheDocument();
  });
  it("should render the searchbar", async () => {
    render(<App />);

    const searchBar = await screen.findByPlaceholderText(
      "Busca en nuestra tienda"
    );

    expect(searchBar).toBeInTheDocument();
  });
  it("should render a list of plants", async () => {
    render(<App />);

    const titleOne = await screen.findByText("Orquídea");
    const titleTwo = await screen.findByText("Rosa de damasco");

    expect(titleOne).toBeInTheDocument();
    expect(titleTwo).toBeInTheDocument();
  });
  it("should render the scientific name of each plant", async () => {
    render(<App />);

    const scientificName = await screen.findByText("Ophrys tenthredinifera");

    expect(scientificName).toBeInTheDocument();
  });
  it("should render the price of each plant", async () => {
    render(<App />);

    const price = await screen.findByText(4.95);

    expect(price).toBeInTheDocument();
  });
});
