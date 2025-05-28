import { useLocation, Link } from "react-router-dom";

function ProductDetail() {
   const { state: product } = useLocation();

   return (
      <div>
         <h1>{product.name}</h1>
         <p>{product.description}</p>
         <Link to="/" state={{ product }}>
            App
         </Link>
      </div>
   );
}
export default ProductDetail;
