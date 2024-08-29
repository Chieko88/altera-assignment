import Card from 'react-bootstrap/Card';

const Product = ({product}) => {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card data-testid="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{usd.format(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
