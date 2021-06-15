import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValues = props.dataPointValues.maps((dataPoints) => dataPointValues.value)
  totalMaximum = Math.max(...dataPointValues)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoints) => (
        <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={null} label={dataPoints.label} />
      ))}
    </div>
  )
}

export default Chart
