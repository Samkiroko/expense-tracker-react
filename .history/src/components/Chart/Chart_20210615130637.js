import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoints) => (
        <ChartBar value={dataPoints.value} maxValue={null} label={dataPoints.label} />
      ))}
    </div>
  )
}

export default Chart
