import React,{useState} from 'react'
import TodoFrom from './TodoFrom';
import Todo from './Todo';

function TodoList() {
    const [todoList, setTodolist] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newtodoList = [todo, ...todoList];

        setTodolist(newtodoList);
        console.log(...todoList)

    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodolist(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todoList].filter(todo => todo.id !== id);

        setTodolist(removedArr);
    };


    const completeTodo = (id) => {
        let updatedTodolist = todoList.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodolist(updatedTodolist);

    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoFrom onSubmit={addTodo} />
            <Todo todoList={todoList}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />

        </div>
    );
}

export default TodoList;

