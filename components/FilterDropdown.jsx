import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from 'prop-types';

const FilterDropdown = ({ name }) => {
  return (
    <div className="filter-dropdown">
      <div className="name">{name}</div>
      <IoMdArrowDropdown />
    </div>
  );
};

FilterDropdown.propTypes = {
  name: PropTypes.string,
}

export default FilterDropdown;
