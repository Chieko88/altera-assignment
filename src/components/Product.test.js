import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from "./Product";

describe("Product Component", () => {
  const sampleProduct = {
    id: 1,
    name: "Wireless Earbuds",
    price: 49.99,
    image: "https://picsum.photos/id/1/300/200",
    description: "High-quality sound with noise cancellation."
  };

  test("renders the product's name", () => {
    render(<Product product={sampleProduct} />);
    expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
  });

  test("renders the product's price", () => {
    render(<Product product={sampleProduct} />);
    expect(screen.getByText(`\$${sampleProduct.price}`)).toBeInTheDocument();
  });

  test("renders the product's image", () => {
    render(<Product product={sampleProduct} />);
    const imageElement = screen.getByAltText(sampleProduct.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', sampleProduct.image);
  });

  test("renders the product's discription", () => {
    render(<Product product={sampleProduct} />);
    expect(screen.getByText(sampleProduct.description)).toBeInTheDocument();
  });
});
