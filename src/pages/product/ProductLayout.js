import React from "react";
import ProductAppBar from "../../layout/appbars/ProductAppBar";

const ProductLayout = ({ children }) => {
  return (
    <>
      <ProductAppBar />
      {children}
    </>
  );
};

export default ProductLayout;
