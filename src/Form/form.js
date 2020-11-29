import React from 'react';
import { useReducer } from 'react';
import initialForm from './data';
import Input from './input'
import './input.css'
function formReducer(prevState, { value, key }) {
    const updatedElement = { ...prevState[key] };
    updatedElement.value = value;
    return { ...prevState, [key]: updatedElement };
};


function Form() {
    const [state, dispatch] = useReducer(formReducer, initialForm);
    return (
        <div className="cont">
            <form className="form" >
                <h1 className="head">SignUp<br/> <span>Form</span></h1>
                {Object.keys(state).map(key => (
                    <Input
                        changed={({ target: { value } }) => dispatch({ value, key })}
                        key={key}
                        value={state[key].value}
                        placeholder={state[key].placeholder}
                        type={state[key].type}
                    />
                ))}
            </form>
        </div>
    );
}
export default Form;