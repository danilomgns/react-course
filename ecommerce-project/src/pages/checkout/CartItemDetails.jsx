import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ cartItem, loadCart }) {

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`)
    await loadCart();
  }

  const updateQuantityCartitem = async () => {
    await axios.put(`api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity)
    })
    await loadCart();
  }

  const [quantity, setQuantity] = useState(cartItem.quantity);

  function changeQuantity(event) {
    setQuantity(event.target.value);
  }
  
  const [isQuantityUpdating, setIsQuantityUpdating] = useState(false);

  function changeUptadeState() {
    if (isQuantityUpdating) {
      updateQuantityCartitem();
      setIsQuantityUpdating(false);
    } else {
      setIsQuantityUpdating(true);
    }
  }

  function keyDownUpdateQuantity(event) {
    if (event.key === 'Enter') {
      changeUptadeState();
    } else if (event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsQuantityUpdating(false);
    }
  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            {'Quantity: '} 
            {isQuantityUpdating ? <input className="quantity-box" type="text" value={quantity} onChange={changeQuantity} onKeyDown={keyDownUpdateQuantity}/> : ''}  
            <span className="quantity-label"> {cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary" onClick={changeUptadeState}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
          onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}