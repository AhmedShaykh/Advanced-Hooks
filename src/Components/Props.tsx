import { FC } from 'react';
import { Props } from './Types';

const Prop: FC<Props> = ({ name, age, email, getName, friends }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{email}</h2>
            <h2>{getName("Get Function")}</h2>
            {friends.map((friend) => (
                <h2>{friend}</h2>
            ))}
        </div>
    )
};

export default Prop;