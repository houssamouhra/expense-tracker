const Expenses = () => {
  return (
    <div>
      <select className='form-select mb-4'>
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
      </table>
    </div>
  );
};

export default Expenses;
