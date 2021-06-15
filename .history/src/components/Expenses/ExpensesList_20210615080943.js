import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found</p>
  if (props.items.length > 0) {
    expensesContent = 
  }
  return <ul className='expenses-list'>
    props.items.map((expenses) => (
      <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />
    ))
  </ul>
}

export default ExpensesList
