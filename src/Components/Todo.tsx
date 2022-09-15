import { useState, useRef } from 'react';

function Todo() {

    const inputRef = useRef<HTMLInputElement | null>(null);

    // const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const addTodo = () => {
        if (inputRef.current) {
            const todo = inputRef.current.value;
            setTodoList(
                [
                    ...todoList,
                    todo
                ]
            );
        }
        // setTodo("");
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTodo(e.target.value);
    // }

    return (
        <div>
            <input type="text" ref={inputRef}
                placeholder='Type TODO'
            // value={todo}
            // onChange={(e) => handleChange(e)} 
            />
            <button onClick={() => addTodo()}>Add TODO</button>
            <ol>
                {todoList.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ol>
        </div>
    )
}

export default Todo;