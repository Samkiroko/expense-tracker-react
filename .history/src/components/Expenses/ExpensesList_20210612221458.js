import React from 'react'
import './ExpensesList.css'

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found</p>
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenses) => (
      <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />
    ))
  }
  return <div></div>
}

export default ExpensesList
