import React,{useContext} from 'react'
import CartContext from '../context/CartContext'

const ItemCard = ({id,name,price,image}) => {
  
  const { cart , add , dec , inc , calcQty } = useContext(CartContext)

  return (
    <>
    <div className='container'>
        <div className='title'>{name}</div>
        <div><img src={image} className='image' alt='Shirt-img'/></div>
            <span className='price-tag'>Rs {price}</span> 
            { cart?.some(e => e.id === id)?( 
              <>
                <button className='dec-button' onClick={()=>dec(id)}>-</button>
                <button className='count'>{calcQty(id)}</button>
                <button className='inc-button' onClick={()=>inc(id)}>+</button>
            </> 
            ) 
            :<button className='buy-button' onClick={()=>add(id)}>Add To Cart</button>}
    </div>
    </>
  )
}

export default ItemCard