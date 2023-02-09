import React from "react";
import ProductTitle from "./ProductTitle";
import "./Details.css";
import Style from "../../helper.css"
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import ProductData from "../Product/ProductData";

const Details = () => {

  const { id } = useParams();
  return (
    <>
      {
        ProductData.map((value, index) => {
          if (value.id == id) {
            let title = "Home / Shirt / " + value.product
            return (
              <>
                <ProductTitle title={title} />
              </>
            )
          }
        })
      }
      <div className="container">
        <div className="details-outer-wrapper">
          {
            ProductData.map((value, index) => {

              if (value.id == id) {
                console.log(value);
                return (
                  <><div style={{width:"60%"}}><ProductImages key={index} imgMain={value.imgscr} img2={value.img2} img3={value.img3} img4={value.img4} /></div>

                    <div><ProductDetails productDescription={value.description} productType={value.product} productName={value.pname} productPrice={value.price} size={value.size} value={value} /></div>

                  </>
                )
              }
            })
          }
        </div>
      </div>
    </>
  );
};

export default Details;
