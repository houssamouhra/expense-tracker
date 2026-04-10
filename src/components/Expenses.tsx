import { type Expense } from '../App';

interface ExpensesProps {
  expenses: Expense[];
  removeExpense: (id: string) => void;
  selectedCategory: string;
  onSelectedCategory: (value: string) => void;
}

const Expenses = ({
  expenses,
  removeExpense,
  selectedCategory,
  onSelectedCategory,
}: ExpensesProps) => {
  return (
    <div>
      <select
        className='form-select mb-4'
        value={selectedCategory}
        onChange={(e) => onSelectedCategory(e.target.value)}
      >
        <option value='All categories'>All categories</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
      </select>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                {
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => removeExpense(expense.id)}
                  >
                    Delete
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
