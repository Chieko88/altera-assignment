import Product from "./Product";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [products, setProducts] = useState(null);
  const productsUrl = "data/products.json";
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(productsUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setProducts(jsonData);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div id="catalog">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Catalog;
