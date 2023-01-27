import { FC } from 'react';
import { useSelector } from 'react-redux';

const Home: FC = () => {

    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>{username} Page</h1>
        </div>
    )
};

export default Home;