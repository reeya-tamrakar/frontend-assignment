import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Featured from "../components/Featured";
import Statistic from "../components/Statistic";
import Search from "../components/Search";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1 uppercase">
          Products
        </h2>
        <h1 className="sm:text-3xl text-4xl text-dark-800 font-medium uppercase">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>Loading...</div>
      )}
      {/* <Products /> */}
      <Featured />
      <Statistic />
    </div>
  );
}
