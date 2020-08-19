import React from "react";

const Form = ({values, setValue}) => {
    const setValueDirect = (event => {
        setValue(event.target.name, event.target.value)
    })

    const setValueOfCheckbox = (event => {
        setValue(event.target.name, event.target.checked)
    })
    
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
        </div>
    );
}

export default Form;