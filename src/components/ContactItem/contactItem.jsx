import PropTypes from 'prop-types';
import s from './contactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
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
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
