import Product from "./Product";
//import products from './products.json';
import { useState } from "react";
import productsAsStaticJson from "./products.json";

const Catalog = () => {
  const [products, setProducts] = useState(productsAsStaticJson);
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
