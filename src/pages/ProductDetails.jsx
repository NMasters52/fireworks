import { useParams } from "react-router-dom";
import { fakeProducts } from "../data/fakeData.js";

const ProductDetails = () => {
  const { id } = useParams();

  const product = fakeProducts.find((product) => product.id === Number(id));
  console.log(product);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
