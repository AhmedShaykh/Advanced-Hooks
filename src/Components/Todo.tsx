import { useState } from 'react';

function Todo() {

    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const addTodo = () => {
        console.log(todo);
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    return (
        <div>
            <input type="text"
                placeholder='Type TODO'
                value={todo}
                onChange={(e) => handleChange(e)} />
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