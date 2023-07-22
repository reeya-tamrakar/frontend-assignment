import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Products from "./Products";

export default function SearchPage() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchName = queryParams.get("search");
    if (products.length > 0) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(searchName.toLowerCase())
      );
      setSearchedProduct(result);
    }
  }, [location, products]);

  return (
    <div>
     {
      searchedProduct.length >0 ?  <Products products={searchedProduct} /> : <div className="text-center my-10">No Products Found...</div>
     }
    </div>
  );
}
