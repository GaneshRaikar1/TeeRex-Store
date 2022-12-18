import React,{useState} from 'react'
import filterIcon from '../images/filter.svg';

const FilterAndSearch = ({query,setQuery,filterHandler}) => {

  const [filterOpen,setFilterOpen]=useState(false)
  const [width,setwidth]=useState()

  const handleResize = () => { 
    setwidth(window.innerWidth)
    if(width>600) { setFilterOpen(false)}
  }
  
  window.addEventListener('resize', handleResize);

  return (
    <div className={filterOpen ? 'filters-open search-form"':"search-form"} id="search-form">
  
    <section className="search-terms">
    <div>
      <span className="search-term-wrap">
        <input type="text" id="search-term" className="search-term" value={query} onChange={(e) => setQuery(e.target.value)}/>
      </span>
      <span className="search-term-button-wrap">
        <button type="button" className="search-button" onClick={(e) =>{e.preventDefault();setQuery(query)} }>Search</button>
      </span>
    </div>
  </section>

  <section className="search-filters" id="search-filters">
    
    <h3 className="search-filters-title" id="search-filters-title"  
        onClick={()=>width<601 && setFilterOpen(!filterOpen)}>
         Filters
         <img src={filterIcon} alt='cartIcon' height={25} width={25}/>
    </h3>
    
    <div className="size-filters filter-group float">
      <p className='type'>Type</p>
      <div>
        <input type="checkbox" value="Polo" id="type" onClick={filterHandler}/>
        <label>Polo</label>
      </div>
      
      <div>
        <input type="checkbox" value="Hoodie" id="type" onClick={filterHandler}/>
        <label>Hoodie</label>
      </div>
      
      <div>
        <input type="checkbox" value="Basic" id="type" onClick={filterHandler}/>
        <label>Basic</label>
      </div>
    </div>

    <div className="size-filters filter-group">
      <p className='type'>Price</p>
      <div>
        <input type="checkbox" value="Low" id="range" onClick={filterHandler}/>
        <label>0-Rs 250</label>
      </div>
      
      <div>
        <input type="checkbox" value="Mid" id="range" onClick={filterHandler}/>
        <label>Rs 251- 450</label>
      </div>
      
      <div>
        <input type="checkbox" value="High" id="range" onClick={filterHandler}/>
        <label>Rs 450 & Above</label>
      </div>
    </div>

    <div className="size-filters filter-group float">
      <p className='type'>Color</p>
      <div>
        <input type="checkbox" value="Red" id="color" onClick={filterHandler}/>
        <label>Red</label>
      </div>
      
      <div>
        <input type="checkbox" value="Green" id="color" onClick={filterHandler}/>
        <label>Green</label>
      </div>
      
      <div>
        <input type="checkbox" value="Blue" id="color" onClick={filterHandler}/>
        <label>Blue</label>
      </div>
    </div>

    <div className="size-filters filter-group">
      <p className='type'>Gender</p>
      <div>
        <input type="checkbox" value="Men" id="gender" onClick={filterHandler}/>
        <label>Men</label>
      </div>
      
      <div>
        <input type="checkbox" value="Women" id="gender" onClick={filterHandler}/>
        <label>Women</label>
      </div>
    </div>

  </section>
</div>

  )
}

export default FilterAndSearch