import Product from "./Product";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { FormGroup } from "react-bootstrap";


const Catalog = () => {
  const [products, setProducts] = useState([]);
  const productsUrl = "data/products.json";
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(null);

  const [sortOrder, setSortOrder] = useState("asc");
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  useEffect(() => {
    setIsLoading(true);

    fetch(productsUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {setProducts(jsonData); })
      .catch(err => {setError(err);})
      .finally(() => {setIsLoading(false);});
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
        <FormGroup controlId="Sort by price">
          <Form.Label>Sort by:</Form.Label>
          <Form.Select aria-label="Sort by price" onChange={handleSortChange}>
            <option value="asc">Price (low to high)</option>
            <option value="desc">Price (high to low)</option>
          </Form.Select>
        </FormGroup>
        <FormGroup controlId="Search by name">
          <Form.Label>Search:</Form.Label>
          <Form.Control type="text" onChange={handleSearchChange}/>
        </FormGroup>
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Catalog;
