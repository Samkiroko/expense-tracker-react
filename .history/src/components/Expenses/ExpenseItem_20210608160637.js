import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  useState()
  let title = props.title

  const clickHandler = () => {
    title = 'Update'
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>KES.{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
