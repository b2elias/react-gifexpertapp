import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleEvent = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      //se usa este metodo ya que no tenemos categories
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={inputValue}
        onChange={handleEvent}
      />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategory;
