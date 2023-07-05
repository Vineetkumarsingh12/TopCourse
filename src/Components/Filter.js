import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
 
  function filtercourse(title){
    setCategory(title);
  }
  return (
    <div className='filter'>
      {
        filterData.map(data=>{
           return( <button key={data.id} className={`filter-button ${category === data.tittle ? 'selected' : ''}`} onClick={()=>filtercourse(data.tittle)}>
                {data.tittle}
            </button>);
        })
      }
    </div>
  )
}

export default Filter;

