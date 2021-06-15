import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoits.map((dataPoits) => (
        <ChartBar />
      ))}
    </div>
  )
}

export default Chart
