// import React, { useState } from 'react'
import './HomeNav.scss'
import { data } from '../../lib/data'

function HomeNav({category, setCategory, setSearch}) {
  
  let categoryArr = []
  data.forEach((item)=>{
    if(!categoryArr.includes(item.category)){
      categoryArr.push(item.category)
    }
  })
  return (
    <div className='home__nav'>
        <ul className="hn__list">
          {
            categoryArr.map((item, index)=>(
              <li onClick={()=> {
                setSearch('')
                setCategory(item)
              }} key={index} className={category == item ? "hn__item active" : "hn__item"}>
                  {item}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default HomeNav