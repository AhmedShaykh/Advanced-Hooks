import { FC, createContext } from 'react';
import './App.css';
import { Enums } from './Components/Enums';
import { EnumType, AppContextType } from './Components/Types';
import Prop from './Components/Props';
import UseState from './Components/UseState';

const AppContext = createContext<AppContextType | null>(null);

const App: FC = () => {

    const learn: string = "React.JS In TypeScript";

    const getName = (name: string): string => name;

    const contextValue: AppContextType = {
        name: "Ahmed",
        country: "Nertherland",
        salary: 10000
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <h1>{learn}</h1>
                <Prop
                    name="Ahmed"
                    age={22}
                    email="ahmed.test@mail.com"
                    getName={getName}
                    friends={["Bilal", "Saqlain", "Majid", "Usman"]}
                />
                <UseState />
                <Enums data="Check Data" enumType={EnumType.frameWork} />
            </div>
        </AppContext.Provider>
    );
};

export default App;