import { FC } from 'react';
import { Prop } from './Types';

export const Enums: FC<Prop> = ({ data, enumType }) => {
    return (
        <div>
            <h1>{data}</h1>
            <h2>{enumType}</h2>
        </div>
    )
};