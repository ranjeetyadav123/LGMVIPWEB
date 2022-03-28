import React, { useState,useEffect,useRef } from 'react';

function TodoFrom(props) {

    const [Input, setInput] = useState(props.edit ? props.edit.value : '');
    const InputRef = useRef(null);

    useEffect(() => {
        InputRef.current.focus();
      });

    const changeHandler=(e)=>{
        setInput(e.target.value);
    };

    const submitHander = (e) => {
       
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: Input
        });

        setInput('');
    };


    return (
        <form className='todo-form' onSubmit={submitHander}>
            {props.edit ? (
        <>
            <input type="text"
                className='todo-input edit'
                value={Input}
                ref={InputRef}
                name='text'
                onChange={changeHandler}
                placeholder='Add a list' />


            <button className='todo-button edit' onClick={submitHander}
            > Update</button>
         </>
            ):(
                <>
                 <input type="text"
                className='todo-input'
                value={Input}
                name='text'
                ref={InputRef}
                
                onChange={changeHandler}
                placeholder='Add a list' />
            <button className='todo-button' onClick={submitHander}
            > Add ToDo</button>
                </>
            )}

        </form>
    )
}

export default TodoFrom