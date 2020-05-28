import React, {useEffect} from 'react';
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";


function App() {

    const [todos, setTodos] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then(response => response.json())
            .then(todoList => {
                setTodos(todoList)
            })
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1 className="title">React app</h1>
                <AddTodo onCreate={addTodo}/>
                {
                    todos.length ?
                        (<TodoList todos={todos} onChangeCompletion={toggleTodo}/>)
                        : (<p>No todos!</p>)
                }
            </div>
        </Context.Provider>
    );
}

export default App;
