import React from 'react'
import './HomeTop.scss'

function HomeTop({search, setSearch}) {
  function fnSearch(e){
    e.preventDefault()
    setSearch(e.target.search.value)
    e.target.search.value = ''
  }
  return (
    <div className='home__top'>
        <div>
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
        </div>
        <form onSubmit={fnSearch} action="#">
            <label htmlFor="#">
                <i className="bi bi-search"></i>
            </label>
            <input name='search' type="text" placeholder='Search' />
        </form>
    </div>
  )
}

export default HomeTop