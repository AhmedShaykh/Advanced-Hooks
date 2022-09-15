import { useState } from 'react';
import { Input } from '@chakra-ui/react';

function Todo() {

    const [todo, setTodo] = useState("");

    return (
        <div>
            <Input type="text"
                placeholder='Type TODO'
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
        </div>
    )
}

export default Todo;