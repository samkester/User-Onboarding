import React, {useState} from 'react';
import Form from "./components/Form";
import * as Yup from "yup";
import formSchema from "./data/formSchema";

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  readTOS: false,
}

const defaultFormErrors = {
  name: "", email: "", password: "", readTOS: "Please accept the terms of service.",
}

function App() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const setFormValue = (name, value) => {
    Yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: "",}))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}));

    setFormValues({...formValues, [name]: value});
  };

  return (
    <div>
      <Form values={formValues} setValue={setFormValue} errors={formErrors} />
    </div>
  );
}

export default App;
