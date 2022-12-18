import { createContext, useState,useEffect } from 'react'
import { fetchData } from '../utils/fetchItems'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  const [cart,setCart]=useState([])

  useEffect(() => {
    const fetchshirts = async() => { 
      const data=await fetchData()
      if(!data.message){
        setItems(data)  
      }
    }         
    fetchshirts()
  }, [])

  items?.map(obj => {
    obj['currentQuantity'] = 1;
    return obj;
  });
  
  const add = (id) => { 
    const newItem=items.find(item=>item.id===id)
    if(newItem.quantity===0){return alert(`${newItem.name} is currently, Out of Stock`)}
    setCart([...cart,newItem])
    alert(`${newItem.name} added to cart`)
  }
  
  const remove = (id) => { 
    const removedItem=cart.find(item=>item.id===id)
    setCart(cart.filter(item=>item.id!==id))
    alert(`${removedItem.name} is Removed from the Cart`)
  }
  
  const dec = (id) => { 
    const decItem=cart.find(item=>item.id===id)
    if(decItem.currentQuantity===1){return remove(id)}  
    setCart([...cart].map(item=>
      item.id===id? {...item,currentQuantity:item.currentQuantity-1} : item
    ))
  }
  
  const inc = (id) => { 
    const incItem=cart.find(item=>item.id===id)
    if(incItem.currentQuantity===incItem.quantity){
      return alert(`Only ${incItem.quantity} units of ${incItem.name} available`)
    }  
    setCart([...cart].map(item=>item.id===id? {...item,currentQuantity:item.currentQuantity+1} : item))
  }
  
  const calcQty = (id) => { 
    return cart.find(item=>item.id===id).currentQuantity
   }
  

  return (
    <CartContext.Provider value={{ cart,add,remove,inc,dec,calcQty }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext



