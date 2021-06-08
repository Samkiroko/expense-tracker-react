import React from 'react'

export const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='New-expense__control'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
      </div>
    </form>
  )
}
