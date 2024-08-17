import React from 'react'
import './Chart.scss'
import MyChart from '../../components/Chart/MyChart'

function Chart() {
  return (
    <div className='page__chart'>
        <div className="chart__inner">
            <MyChart/>
        </div>
    </div>
  )
}

export default Chart