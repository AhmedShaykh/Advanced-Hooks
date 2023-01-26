import { ChangeEvent, FC, useState } from 'react';
import { login, logout } from '../App/Store';
import { useDispatch, useSelector } from 'react-redux';

const Login: FC = () => {

    const [userName, setUserName] = useState<string>("");

    const dispatch = useDispatch();

    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>{username}</h1>

            <input
                type="text"
                placeholder='Enter Value'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUserName(e.target.value)
                }}
            /> {" "}

            <button onClick={() => dispatch(login({
                username: userName
            }))}>Submit</button> {" "}

            <button onClick={() => dispatch(logout())}>Login</button>

        </div>
    )
};

export default Login;