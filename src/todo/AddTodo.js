import React, {useState} from "react";
import PropTypes from 'prop-types';
import useInputValue from "../hooks/UseInputValue";


function AddTodo({onCreate}) {
    const input = useInputValue();

    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddTodo;
