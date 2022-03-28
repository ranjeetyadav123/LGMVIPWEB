import React, { useState } from 'react'
import TodoFrom from './TodoFrom'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Todo = ({ todoList, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoFrom edit={edit} onSubmit={submitUpdate} />;
    }

    return todoList.map((todo, index) =>{ 
        return(

        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
        
    )});

};

export default Todo;