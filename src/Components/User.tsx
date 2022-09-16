import { useContext } from 'react';
import { UserContext } from '../App';

const User = () => {

    const { state, dispatch } = useContext(UserContext);

    return (
        <div className="container">
            <h1>Name: {state.name}</h1>
            <h1>Age: {state.age}</h1>
            <button onClick={() => {
                dispatch({ type: "CHANGE_NAME", payload: "Ahmed Shaikh" })
            }}>Update Name</button>
            <button onClick={() => {
                dispatch({ type: "UPDATE_AGE", payload: 22 })
            }}>Update Age</button>
        </div>
    )
}

export default User;