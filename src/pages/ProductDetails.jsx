import { useParams } from "react-router-dom";

function ProductDetails() {

  const { productsID } = useParams();

  return (
    <div>
      <p>ProductDetails Page</p>

      <p>Product param: {productsID}</p>
    </div>
  );
}

export default ProductDetails;
