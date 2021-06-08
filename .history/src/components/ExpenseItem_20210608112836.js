import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 28)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 32000
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>KES.{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
