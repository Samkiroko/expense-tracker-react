import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenses) => (
            <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />
          ))}
      </Card>
    </div>
  )
}

export default Expenses
