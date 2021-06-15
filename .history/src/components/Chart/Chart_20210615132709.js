import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.maps((dataPoint) => dataPoint.value)
  totalMaximum = Math.max(...dataPointValues)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoints) => (
        <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />
      ))}
    </div>
  )
}

export default Chart
