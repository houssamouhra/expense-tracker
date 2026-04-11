import { type Expense } from '../App';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) return null;

  return (
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
                <button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>
                  Delete
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
