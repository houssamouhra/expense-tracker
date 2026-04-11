import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import { type ExpenseFormData } from './components/ExpenseForm';
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
    setExpenses((expense) => [...expense, data]);
  };

  const filteredExpenses =
    selectedCategory === 'All categories'
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <>
      <ExpenseForm onSubmit={handleExpenses} />
      <ExpenseFilter selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory} />
      <ExpenseList expenses={filteredExpenses} onDelete={removeExpense} />
    </>
  );
};

export default App;
