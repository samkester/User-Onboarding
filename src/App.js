import React, {useState} from 'react';
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import * as Yup from "yup";
import formSchema from "./data/formSchema";
import Axios from 'axios';

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  readTOS: false,
}

const defaultFormErrors = {
  name: "", email: "", password: "", readTOS: "Please accept the terms of service.",
}

const defaultUsers = [
  {
    name: "John Doe",
    email: "John@Doe.com",
    password: "password1",
    id: "0"
  }
];

function App() {
  const [users, setUsers] = useState(defaultUsers);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const setFormValue = (name, value) => {
    Yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: "",}))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}));

    setFormValues({...formValues, [name]: value});
  };

  const submitForm = () => {
    Axios.post(
      "https://reqres.in/api/users",
      {name: formValues.name,
       email: formValues.email,
       password: formValues.password})
    .then(result => setUsers(users.concat(result.data)))
    .catch(error => console.log(error))
    .finally(() => {setFormValues(defaultFormValues);
                    setFormErrors(defaultFormErrors);})
  }

  return (
    <div>
      <Form values={formValues} setValue={setFormValue} errors={formErrors} submit={submitForm} />
      {users.map(item => <UserCard key={item.id} user={item} />)}
    </div>
  );
}

export default App;
