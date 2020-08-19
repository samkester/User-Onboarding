import React, { useEffect, useState } from "react";
import formSchema from "../data/formSchema";

const Form = ({values, errors, setValue}) => {
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const setValueDirect = (event => {
        setValue(event.target.name, event.target.value)
    })

    const setValueOfCheckbox = (event => {
        setValue(event.target.name, event.target.checked)
    })

    useEffect(() => {
        formSchema.isValid(values).then(valid => setButtonEnabled(valid));
    }, [values]);
    
    return(
        <div>
            <label>
                Name
                <input type="text" name="name" value={values.name} onChange={setValueDirect} />
            </label>
            <label>
                Email
                <input type="text" name="email" value={values.email} onChange={setValueDirect} />
            </label>
            <label>
                Password
                <input type="text" name="password" value={"*".repeat(values.password.length)} onChange={setValueDirect} />
            </label>
            <label>
                I agree to the Terms of Service.
                <input type="checkbox" name="readTOS" checked={values.readTOS} onChange={setValueOfCheckbox} />
            </label>
            <button disabled={!buttonEnabled}>Push Me</button>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.readTOS}</div>
            </div>
        </div>
    );
}

export default Form;