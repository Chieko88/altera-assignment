import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Product = ({product}) => {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Col xs="auto" >
      <Card data-testid="product-card" style={{ width: '18rem' }} className="mt-3">
        <Card.Img variant="top" src={product.image} alt={product.name} loading="lazy"/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{usd.format(product.price)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
