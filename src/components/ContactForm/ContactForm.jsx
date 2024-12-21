import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid"; // Используем nanoid для генерации ID
import s from "./ContactForm.module.css";
import * as Yup from "yup";

// Валідація для форми через Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Генерация уникального ID с использованием nanoid
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };

          // Додавання контакту через onAddContact
          onAddContact(newContact);

          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div>
              <label>
                <span>Name:</span>
                <Field className={s.input} type="text" name="name" />
              </label>
              {errors.name && touched.name && (
                <div className={s.error_message}>{errors.name}</div>
              )}
            </div>

            <div>
              <label>
                <span>Number:</span>
                <Field className={s.input} type="text" name="number" />
              </label>
              {errors.number && touched.number && (
                <div className={s.error_message}>{errors.number}</div>
              )}
            </div>

            <button className={s.btn_form} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
