import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Catalog from "./Catalog";
import userEvent from "@testing-library/user-event";

describe("Catalog Component", () => {
  const sampleProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 49.99,
    image: "https://picsum.photos/id/1/300/200",
    description: "High-quality sound with noise cancellation."
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 129.99,
    image: "https://picsum.photos/id/2/300/200",
    description: "Track your fitness and stay connected."
  }
 ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(sampleProducts),
      ok: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders the product list after fetching data", async() => {
    render(<Catalog/>);
    await waitFor(() => {
      expect(screen.getByText("Wireless Earbuds")).toBeInTheDocument();
      expect(screen.getByText("$49.99")).toBeInTheDocument();
      expect(screen.getByText("High-quality sound with noise cancellation.")).toBeInTheDocument();
      const image1 = screen.getByAltText(sampleProducts[0].name);
      expect(image1).toBeInTheDocument();
      expect(image1).toHaveAttribute('src', "https://picsum.photos/id/1/300/200");

      expect(screen.getByText("Smartwatch")).toBeInTheDocument();
      expect(screen.getByText("$129.99")).toBeInTheDocument();
      expect(screen.getByText("Track your fitness and stay connected.")).toBeInTheDocument();
      const image2 = screen.getByAltText(sampleProducts[1].name);
      expect(image2).toBeInTheDocument();
      expect(image2).toHaveAttribute('src', "https://picsum.photos/id/2/300/200");

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("data/products.json");
    });
  });

  test("Products can be sorted in asc and desc price oeders", async() => {
    render(<Catalog/>);
    await waitFor(() => {
      const productCards = screen.getAllByTestId("product-card");
      expect(productCards).toHaveLength(sampleProducts.length);
    });

    userEvent.selectOptions(screen.getByLabelText("Sort by:"), "asc");

    const productInAscOrder = await screen.findAllByTestId("product-card");
    expect(productInAscOrder[0]).toHaveTextContent("Wireless Earbuds");
    expect(productInAscOrder[1]).toHaveTextContent("Smartwatch");

    userEvent.selectOptions(screen.getByLabelText("Sort by:"), "desc");

    const productInDescOrder = await screen.findAllByTestId("product-card");
    expect(productInDescOrder[0]).toHaveTextContent("Smartwatch");
    expect(productInDescOrder[1]).toHaveTextContent("Wireless Earbuds");
  })

  test("Products can be searched by name", async() => {
    render(<Catalog/>);
    await waitFor(() => {
      const productCards = screen.getAllByTestId("product-card");
      expect(productCards).toHaveLength(sampleProducts.length);
    });

    const searchInput = screen.getByLabelText("Search:")

    userEvent.type(searchInput, "Wi");
    const searchResults = await screen.findAllByTestId("product-card");
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0]).toHaveTextContent("Wireless Earbuds");
    expect(screen.queryByText("Smartwatch")).not.toBeInTheDocument();

    userEvent.clear(searchInput);
    const originalProducts = await screen.findAllByTestId("product-card");
    expect(originalProducts).toHaveLength(sampleProducts.length);
    expect(originalProducts[0]).toHaveTextContent("Wireless Earbuds");
    expect(originalProducts[1]).toHaveTextContent("Smartwatch");
  })
});
