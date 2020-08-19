import React, {useState} from 'react';
import Form from "./components/Form"

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  readTOS: false,
}

function App() {
  const [formValues, setFormValues] = useState(defaultFormValues);

  const setFormValue = (name, value) => {
    setFormValues({...formValues, [name]: value});
  };

  return (
    <div>
      <Form values={formValues} setValue={setFormValue} />
    </div>
  );
}

export default App;
