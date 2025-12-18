import React from "react";
import PageHeader from "../components/PageHeader";
import DirectCloudinaryTest from "../components/Test";

const Products = () => {
  return (
    <>
      <PageHeader
        title="Products"
        content="See below for a range of products we provide. If you're looking for
          something specific use the filters to find the items you want."
      />
      <div className="max-w-3xl flex flex-col justify-center align-center"></div>
      <DirectCloudinaryTest />
    </>
  );
};

export default Products;
