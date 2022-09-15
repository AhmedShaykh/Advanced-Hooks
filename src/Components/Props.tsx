import React from 'react';

interface typeProps {
    ts?: string;
    children?: React.ReactNode;
}

const Props: React.FC<typeProps> = ({ ts, children }) => {
    return (
        <div>
            <h1>Advanced Hooks In {ts} & {children}</h1>
        </div>
    )
}

export default Props;