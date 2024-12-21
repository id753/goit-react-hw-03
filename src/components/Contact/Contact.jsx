import s from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const Contact = ({ name, number, onDeleteContact, id }) => {
    return (
      <div className={s.div}>
       <div className={s.text}>
       <p><FaUserGraduate /> {name}</p>
       <p><FaPhoneAlt /> {number}</p>
        </div>
        <button className={s.btn_delete} onClick={() => onDeleteContact(id)}>Delete</button>
      </div>
    );
  };
  
  export default Contact;
  