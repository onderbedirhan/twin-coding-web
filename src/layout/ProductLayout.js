import React from "react";
import ProductAppBar from "./appbars/ProductAppBar";

const ProductLayout = ({ children }) => {
  return (
    <>
      <ProductAppBar />
      {children}
    </>
  );
};

export default ProductLayout;
