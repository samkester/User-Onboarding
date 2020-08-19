import React from "react";

const Form = (props) => {
    return(
        <div>
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Email
                <input type="text" name="email" />
            </label>
            <label>
                Password
                <input type="text" name="password" />
            </label>
            <label>
                I agree to the Terms of Service.
                <input type="checkbox" name="name" />
            </label>
        </div>
    );
}

export default Form;