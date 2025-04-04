import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const products = [
  { id: 1, name: "Nike Shoes", price: 59.99, image: "/images/Shoe1.jpg" },
  { id: 2, name: "Adidas Sneakers", price: 69.99, image: "/images/Shoe2.jpg" },
  { id: 3, name: "Puma Running", price: 49.99, image: "/images/Shoe3.jpg" },
];

const ProductList = ({searchQuery}) => {

 // Filtering Products
 const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="product-container">
      <h2>Our Products</h2>
    <div className="product-list">

    {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} /> */}
      {/* ))} */}
    </div>
    </div>
  );
};

export default ProductList;
