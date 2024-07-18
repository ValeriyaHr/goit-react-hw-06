import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";


const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
   
  return (
    <li className={css.contactElement}  >
      <ul className={css.dataList}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>{phone}</li>
      </ul>
      <button
        className={css.deleteAction}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;