export interface AppContextType {
    name: string;
    country: string;
    salary: number;
};

export const enum EnumType {
    frameWork = "React TypeScript"
};

export type Prop = {
    data: string
    enumType: EnumType
};

export interface Props {
    name: string;
    age: number;
    email: string;
    getName: (name: string) => string;
    friends: string[];
};