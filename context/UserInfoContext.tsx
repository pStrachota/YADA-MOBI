import {Food} from "../types/types";
import {createContext, ReactNode, useContext, useState} from "react";


interface UserInfoState {
    name: string;
    setName: (name: string) => void;
    age: string;
    setAge: (age: string) => void;
    weight: string;
    setWeight: (weight: string) => void;
    height: string;
    setHeight: (height: string) => void;
    // setFood: (food: Food[]) => void;
}

export const UserInfoContext = createContext<UserInfoState>({
    name: "",
    setName: () => {

    },
    age: "",
    setAge: () => {

    },
    weight: "",
    setWeight: () => {

    },
    height: "",
    setHeight: () => {

    }
});

export const UserInfoProvider = ({children}: { children: ReactNode }) => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");

    return (
        <UserInfoContext.Provider value={{
            name,
            setName,
            age,
            setAge,
            weight,
            setWeight,
            height,
            setHeight,
        }}>
            {children}
        </UserInfoContext.Provider>
    );
}


export const useUserInfoState = () => {

    const context = useContext(UserInfoContext);
    if (context === undefined) {
        throw new Error('useUserInfoState must be used within a UserInfoProvider');
    }
    return context;
    // const context = useContext(U);
    // if (context === undefined) {
    //     throw new Error('useFoodState must be used within a FoodProvider');
    // }
    // return context;
}
