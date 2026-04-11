import { useState } from 'react';
import Form from './components/Form';
import Expenses from './components/Expenses';
import ExpenseList from './components/ExpenseList';
import { type ExpenseFormData } from './components/Form';
export type Expense = ExpenseFormData & {
  id: string;
};

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleExpenses = (data: Expense) => {
    setExpenses((prev) => [...prev, data]);
  };

  const filteredExpenses =
    selectedCategory === 'All categories'
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <>
      <Form onSubmit={handleExpenses} />
      <Expenses selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory} />
      <ExpenseList expenses={filteredExpenses} onDelete={removeExpense} />
    </>
  );
};

export default App;
