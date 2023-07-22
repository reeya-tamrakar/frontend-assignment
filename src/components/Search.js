import React, { useState, useEffect } from "react";
import Products from "./Products";
import { useNavigate } from "react-router";

export default function Search() {
  const navigate = useNavigate();
  const GoToSearch = (e) => {
    setSearchName("");
    navigate(`/product?search=${searchName}`);}

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      GoToSearch();
    }
  };

  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [searchedProduct, setSearchedProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      setProducts(data);

    };
    getProducts();
  }, []);

  const inputSearch = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="hero-field"
          name="hero-field"
          className="w-25 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-5"
          value={searchName}
          onChange={inputSearch}
          onKeyDown={keyDown}
        />
        <button
          className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={GoToSearch}
        >
          Search
        </button>
      </div>
      {searchedProduct.length > 0 && <Products products={searchedProduct} />}
    </div>
  );
}
