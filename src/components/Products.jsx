import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) =>
        product.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "Products"}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-3 rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                {product.title}
              </h3>
              {product.oldPrice ? (
                <div className="flex items-center space-x-2">
                  <p className="text-red-500 font-medium">{product.price}</p>
                  <p className="text-gray-500 line-through text-sm">
                    {product.oldPrice}
                  </p>
                </div>
              ) : (
                <p className="text-red-500 font-medium">{product.price}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
