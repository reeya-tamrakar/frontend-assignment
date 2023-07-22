import React from "react";
import { useNavigate } from "react-router";

export default function Products({ products = [] }) {
    const navigate = useNavigate()
    const goToProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              const { id, title, price, description, category, image } =
                product;
                
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-3 cursor-pointer"
                  onClick={()=> goToProductPage(id)}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
