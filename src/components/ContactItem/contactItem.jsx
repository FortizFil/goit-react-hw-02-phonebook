import PropTypes from 'prop-types';
import s from './contactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  console.log(id);
  return (
    <li className={s.contact__item}>
      {name}:{}
      {number}
      <button
        type="button"
        className="TodoList__btn"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
