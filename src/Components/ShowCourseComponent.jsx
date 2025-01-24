import React from "react";
import { useNavigate } from "react-router-dom";


function ShowCourseComponent({filterCourseFunction,addCourseToCartFunction}){
    const navigate = useNavigate(); // Hook to navigate programmatically

  const handleAddToCart = (product) => {
    addCourseToCartFunction(product); // Add product to cart
    navigate("/MyCart"); // Navigate to My Cart page
  };
    return(
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry!, No Matching Product Found.
                </p>
                ):(
                filterCourseFunction.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p> Price: Rs.{product.price}</p>
                        <button 
                            className="add-to-cart-button"
                            onClick={()=> handleAddToCart(product)}
                        >
                            Add to Shopping Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}
export default ShowCourseComponent;