import css from './Contact.module.css';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.details}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button onClick={() => onDelete(contact.id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
