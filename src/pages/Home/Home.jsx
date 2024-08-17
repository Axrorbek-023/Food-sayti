import React, { useEffect, useState } from 'react'
import './Home.scss'
import HomeTop from '../../components/HomeTop/HomeTop'
import HomeNav from '../../components/HomeNav/HomeNav'
import { data } from '../../lib/data'
import Order from '../../components/Order/Order'
import Payment from '../../components/Payment/Payment'
// import SkeletonApp from '../../components/Skeleton/Skeleton'

function Home() {
  // const [loading, setLoading] = useState(false)
  // useEffect(()=> {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1500);
  // })
  const [open, setOpen] = useState(true)
  const [search, setSearch] = useState('')
  const [place, setPlace] = useState('dinein')
  let localFood = []
  if (window.localStorage.getItem('localfood')) {
    localFood = JSON.parse(window.localStorage.getItem('localfood'))
  }
  const [category, setCategory] = useState('milliy')
  const [render, setRender] = useState(true)

  function setFood(item) {
    if (window.localStorage.getItem('localfood')) {
      localFood = JSON.parse(window.localStorage.getItem('localfood'))
    }
    if (localFood.find((k) => k.id == item.id)) {
      localFood.find((k) => k.id == item.id).count = localFood.find((k) => k.id == item.id).count + 1
    } else {
      item.count = 1
      item.place = place
      localFood.push(item)
    }
    window.localStorage.setItem('localfood', JSON.stringify(localFood))
    setRender(!render)
  }
  // let fakeData = [0,1,2,3,4,5,6,7,8,9,]
  return (
    <div className="Home">
      <div className="home__inner">
        <HomeTop search={search} setSearch={setSearch} />
        <HomeNav category={category} setCategory={setCategory} setSearch={setSearch} />
        <div className='home__control'>
          <h3>Choose Dishes</h3>
          <select onChange={(value) => setPlace(value.target.value)} name="" id="" className='select'>
            <option value="dinein">Dine in</option>
            <option value="togo">To go</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        {/* <div>
          {
            loading ? <ul className="home__list">
              {
                <SkeletonApp/>
              }
            </ul> :
            <ul className="home__list">
              {
                  data?.filter((i) => i.category == category).map((item, index) => (
                    <li onClick={() => setFood(item)} key={index} className="home__item">
                      <img src={item.img} alt="" />
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                      <p>{item.category}</p>
                    </li>
                  ))
              }
            </ul>
          }
        </div> */}
        <ul className="home__list">
          {
            search.length >= 1 ? data?.filter((i) =>
              i.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                <li onClick={() => setFood(item)} key={index} className="home__item">
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>{item.category}</p>
                </li>
              )) :
              data?.filter((i) => i.category == category).map((item, index) => (
                <li onClick={() => setFood(item)} key={index} className="home__item">
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>{item.category}</p>
                </li>
              ))
          }
        </ul>
      </div>
      <Order setRender={setRender} render={render} open={open} setOpen={setOpen}/>
      <Payment open={open} setOpen={setOpen}/>
      <div style={!open ? {display:'block'} : {display:'none'}} className="home__shadow">

      </div>
    </div>
  )
}

export default Home