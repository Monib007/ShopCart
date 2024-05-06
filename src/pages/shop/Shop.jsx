import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";
import { Link } from "phosphor-react";

const Shop = () => {

  const privacy_URL = "https://www.termsfeed.com/public/uploads/2022/01/sample-ecommerce-privacy-policy-template.pdf"

  const terms_URL = 'https://www.termsofservicegenerator.net/sample-terms-service-template/'

  return (
    <div className="shop">
      <div className="shop-title">
        <h1>ShopCart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>

      <div className="footer">
        <a href={privacy_URL} target="_blank">
        Privacy Policy
        </a>
        |   
        <a href={terms_URL}>
        Terms of Service
        </a>
        |
        <div>
        © 2024 ShopCart
        </div>
      </div>
    </div>
  );
};

export default Shop;
