import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const CartItem = (props) => {

    const { id, title, price, thumbnail} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={thumbnail} alt="Image" />
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p> $ {price} </p>
            <div className="count-handler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem