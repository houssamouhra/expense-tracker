import { categories } from '../constants/categories';

interface ExpenseFilterProps {
  selectedCategory: string;
  onSelectedCategory: (value: string) => void;
}

const ExpenseFilter = ({ selectedCategory, onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <div className='mb-3'>
      <select
        className='form-select'
        value={selectedCategory}
        onChange={(e) => onSelectedCategory(e.target.value)}
      >
        <option value='All categories'>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
