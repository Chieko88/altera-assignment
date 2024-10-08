import Product from "./Product";
import { useState, useEffect, useMemo } from "react";
import Form from 'react-bootstrap/Form';
import { Col, FormGroup, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


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

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }, [filteredProducts, sortOrder]);

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
    <Container>
      <div id="catalog">
        <Row>
          <Col>
            <FormGroup controlId="Sort by price">
              <Form.Label>Sort by:</Form.Label>
              <Form.Select aria-label="Sort by price" onChange={handleSortChange}>
                <option value="asc">Price (low to high)</option>
                <option value="desc">Price (high to low)</option>
              </Form.Select>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="Search by name">
              <Form.Label>Search:</Form.Label>
              <Form.Control type="text" onChange={handleSearchChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Catalog;
