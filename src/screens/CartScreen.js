import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext'

const CartScreen = () => {
  const { cart,remove,dec,inc } = useContext(CartContext)
  const total=cart.reduce( (total,item) => total + ( item.currentQuantity*item.price ) , 0 )
  const navigate=useNavigate()

  return (
    <>
      <div className='cart-container'>
        { cart.length>0 ?
          cart.map(item=>
          <div class="row">
            <div className="column cart-image" style={{}}>
              <img className='cart-img' src={item.imageURL} alt="Snow" style={{width:100}}/>
            </div>
            <div class="column cart-desc" style={{}}>
              <p>{item.name}</p><p>Rs {item.price} X {item.currentQuantity} = Rs {item.price*item.currentQuantity}</p>
            </div>
            <div class='combine'>
              <div class="column cart-action" style={{}}>
                <button className='dec-button' onClick={ ()=>dec(item.id) }>-</button>
                <button className='count'>{item.currentQuantity}</button>
                <button className='inc-button' onClick={ ()=>inc(item.id) }>+</button>
              </div>
              <div class="column cart-action remove-btn" style={{}}>
                <button className='buy-button' onClick={ ()=>remove(item.id) }>Remove</button>
              </div>
            </div>
          </div>
         )     
         : <div className='no-results'>
              <h2>No items in Cart</h2> 
              <button className='buy-button' onClick={()=>navigate('/')}> Shop Now</button> 
           </div>
        }
        { cart.length > 0 && <h1 class='total'>Total Amount : Rs {total}</h1> }
    </div>
    </>
  )
}

export default CartScreen