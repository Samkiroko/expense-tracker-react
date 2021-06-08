import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocalString('en-US', { month: 'long' })
  return (
    <div className='expense-item'>
      <div>
        <div>{props.date.toLocalSting('en-US', {})}</div>
        <div></div>
        <div></div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>KES.{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
