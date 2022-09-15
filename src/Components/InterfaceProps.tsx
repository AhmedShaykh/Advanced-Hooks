import React from 'react';

type typeProps = {
    data: string;
    lang?: string;
}

function InterfaceProps({ data, lang }: typeProps) {
    return (
        <div>
            <h2>React{lang} & {data}{lang}</h2>
        </div>
    )
}

export default InterfaceProps;