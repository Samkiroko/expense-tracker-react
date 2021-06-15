import React from 'react'
import './chartBar.css'

const chartBar = () => {
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'></div>
    </div>
  )
}

export default chartBar
