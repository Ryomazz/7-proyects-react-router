import { useNavigate, useLocation } from "react-router-dom";

const products = [
   {
      name: "Producto 1",
      id: 1,
      description: "Tremendo el producto 1 boffff ufff",
   },
   {
      name: "Producto 2",
      id: 2,
      description: "Tremendo el producto 2 boffff ufff",
   },
   {
      name: "Producto 3",
      id: 3,
      description: "Tremendo el producto 3 boffff ufff",
   },
   {
      name: "Producto 4",
      id: 4,
      description: "Tremendo el producto 4 boffff ufff",
   },
   {
      name: "Producto 5",
      id: 5,
      description: "Tremendo el producto 5 boffff ufff",
   },
   {
      name: "Producto 6",
      id: 6,
      description: "Tremendo el producto 6 boffff ufff",
   },
];

function App() {
   let navigate = useNavigate();
   const { state } = useLocation();
   return (
      <div>
         <h1>Products</h1>
         <p>Coming from {state.product.name}</p>
         {products.map((product) => {
            return (
               <div key={product.id}>
                  <h3>{product.name}</h3>
                  <button
                     onClick={() =>
                        navigate(`/product/${product.id}`, { state: product })
                     }
                  >
                     Got to {product.name}
                  </button>
               </div>
            );
         })}
      </div>
   );
}
export default App;
