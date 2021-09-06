import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter__label}>
    <h3 className={s.filter__name}>Find contacts by name</h3>
    <input
      className={s.filter__input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
