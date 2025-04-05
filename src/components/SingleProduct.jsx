import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-sm text-gray-500 mb-2">Category</div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">{product.title}</h1>

          <div className="flex items-center space-x-3 mb-4">
            <p className="text-xl sm:text-2xl font-bold text-primary">{product.price}</p>
            {product.oldPrice && (
              <p className="text-gray-500 line-through text-sm sm:text-base">
                {product.oldPrice}
              </p>
            )}
          </div>

          <p className="text-gray-700 mb-6">
            This is a demo description for the product. You can replace this
            with actual product data.
          </p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
