import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import loadingIcon from '../images/loading.svg';
import FilterAndSearch from '../components/FilterAndSearch';
import ItemCard from '../components/ItemCard';
import { fetchData } from '../utils/fetchItems'

const ProductsScreen = () => {
    const [query,setQuery]=useState("")
    const [searchParam] = useState(["type", "name", "color"]);
    const [filter, setFilter] = useState({type:[],range:[],color:[],gender:[]});
    const [items, setItems] = useState([]);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const navigate = useNavigate()

    useEffect(() => {
      const fetchshirts = async() => {   
        const shirts=await fetchData()
        if(shirts.message){
          setError(shirts.message)
        }
        else{
          setItems(shirts)
        }
        setLoading(false)               
       }
      fetchshirts()
    }, [])

    items?.map(obj => {
      const range= parseInt(obj.price) > 250 ? parseInt(obj.price) < 450 ? 'Mid' : 'High' : 'Low'
      obj['range'] = range;
      return obj;
    }) 

    const data = Object.values(items);

    function search(items) {
      return items?.filter(function(item) {
        for (var key in filter) {
          if ( (item[key] === undefined  || !filter[key].includes(item[key])) && filter[key].length!==0) {
            return false
          }
        }
        return searchParam.some((newItem) => {
          return ( item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 );
        });
      });  
    }

    const filterHandler = (e) => { 
      if(e.target.checked===true){
         const param={...filter}
         param[e.target.id].push(e.target.value)
         setFilter(param)
      }
      if(e.target.checked===false){ 
        const params={...filter}
        const ad=params[e.target.id]?.filter(param=>param!==e.target.value)
        params[e.target.id]=ad
        setFilter(params)
      }
    }  

    if(loading){return <img src={loadingIcon} className='loading' alt='Loading'/> }

    return (
      <>
        <FilterAndSearch query={query} setQuery={setQuery} filterHandler={filterHandler}/>
        { items.length ? 
        <div className="cards search-results">
          { search(data).length>0 ? 
            search(data)?.map(item=>  
            <div className="card">
              <ItemCard name={item.name} price={item.price} image={item.imageURL} id={item.id} />
            </div>
            ) 
            : <div className='no-results'>
                  <h1>No Items match Your Request, Try removing filters or check search spelling</h1>
              </div>
          }
        </div>
        : <div>
            <h1 className='no-results'>{error} , Check Network Connection </h1>
            <button className='reload-button' onClick={()=>navigate(0)}>Reload</button>
          </div>
        }
       </>
    )
}

export default ProductsScreen