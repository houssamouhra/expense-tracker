import Form from './components/Form';
import Expenses from './components/Expenses';
import { useState } from 'react';
import { type ExpenseFormData } from './components/Form';
export type Expense = ExpenseFormData & {
  id: string;
};

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleExpenses = (data: Expense) => {
    setExpenses((prev) => [...prev, data]);
  };

  return (
    <>
      <Form onSubmit={handleExpenses} />
      <Expenses expenses={expenses} removeExpense={removeExpense} />
    </>
  );
};

export default App;
