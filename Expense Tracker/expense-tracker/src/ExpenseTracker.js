// ExpenseTracker.js
import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  const addExpense = () => {
    if (description && amount && category) {
      const newExpense = {
        id: new Date().getTime(),
        description,
        amount: parseFloat(amount),
        category
      };
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + parseFloat(amount));
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button onClick={addExpense}>Add Expense</button>
      <h3>Total Expenses: {totalExpenses}</h3>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
