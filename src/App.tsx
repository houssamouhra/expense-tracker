import Form from './components/Form';
import Expenses from './components/Expenses';
import { useState } from 'react';
import type { ExpenseFormData } from './components/Form';

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseFormData[]>([]);

  const handleExpenses = (data: ExpenseFormData) => {
    setExpenses((prev) => [...prev, data]);
  };

  return (
    <>
      <Form onSubmit={handleExpenses} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
