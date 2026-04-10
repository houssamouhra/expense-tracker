const Form = () => {
  return (
    <form action=''>
      <div>
        <label htmlFor='description'>Description</label>
        <input id='description' type='text' />
      </div>

      <div>
        <label htmlFor='amount'>Amount</label>
        <input id='amount' type='text' />
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select name='category' id='category'>
          <option value=''></option>
          <option value='Groceries'>Groceries</option>
          <option value='Utilities'>Utilities</option>
          <option value='Entertainment'>Entertainment</option>
        </select>
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
