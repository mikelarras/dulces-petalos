import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { type Plant } from "../core/domain/Plant";
import { PlantsOverview } from "../components/PlantsOverview";

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
  it("should render the header", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const logo = await screen.findByAltText("logo tienda");

    expect(logo).toBeInTheDocument();
  });
});

describe("Plants overview component", () => {
  beforeEach(async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockedResponse,
    } as Response);
  });

  it("should render the searchbar", async () => {
    render(
      <MemoryRouter>
        <PlantsOverview />
      </MemoryRouter>
    );

    const searchBar = await screen.findByPlaceholderText(
      "Busca en nuestra tienda"
    );

    expect(searchBar).toBeInTheDocument();
  });

  it("should render a list of plants", async () => {
    render(
      <MemoryRouter>
        <PlantsOverview />
      </MemoryRouter>
    );

    const titleOne = await screen.findByText("Orquídea");
    const titleTwo = await screen.findByText("Rosa de damasco");

    expect(titleOne).toBeInTheDocument();
    expect(titleTwo).toBeInTheDocument();
  });

  it.skip("should render the scientific name of each plant", async () => {
    render(
      <MemoryRouter>
        <PlantsOverview />
      </MemoryRouter>
    );

    const scientificName = await screen.findByText("Ophrys tenthredinifera");

    expect(scientificName).toBeInTheDocument();
  });

  it("should render the price of each plant", async () => {
    render(
      <MemoryRouter>
        <PlantsOverview />
      </MemoryRouter>
    );

    const price = await screen.findByText("€ 4.95");

    expect(price).toBeInTheDocument();
  });

  describe("search bar", () => {
    it("should show elements that fit the description", async () => {
      render(
        <MemoryRouter>
          <PlantsOverview />
        </MemoryRouter>
      );

      const searchPlantPlaceholer = screen.getByPlaceholderText(
        "Busca en nuestra tienda"
      );
      await userEvent.type(searchPlantPlaceholer, "Orquídea");
      const orquidea = screen.getByText("Orquídea");

      expect(orquidea).toBeInTheDocument();
    });
  });

  it("should not show elements that don't fit the description", async () => {
    render(
      <MemoryRouter>
        <PlantsOverview />
      </MemoryRouter>
    );

    const searchPlantPlaceholer = screen.getByPlaceholderText(
      "Busca en nuestra tienda"
    );
    await userEvent.type(searchPlantPlaceholer, "Orquídea");
    const rosa = screen.queryByText("Rosa de damasco");
    expect(rosa).not.toBeInTheDocument();
  });
});
