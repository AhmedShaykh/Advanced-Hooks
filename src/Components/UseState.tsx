import { ChangeEvent, useState } from 'react';

const UseState = () => {

    const [country, setCountry] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Your Country"
                onChange={handleChange}
            />

            <h3>{country}</h3>
        </div>
    )
};

export default UseState;