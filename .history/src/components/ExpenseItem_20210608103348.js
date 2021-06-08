import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28th 2020</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div>Ksh. 32,000</div>
      </div>
    </div>
  )
}

export default ExpenseItem
