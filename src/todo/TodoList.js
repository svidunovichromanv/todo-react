import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul : {
        listStyle: 'none',
        margin: '0 20px'
    }
};

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, i) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={i}
                    onChangeCompletion = {props.onChangeCompletion}
                />
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeCompletion: PropTypes.func.isRequired
};

export default TodoList;
