import {Food} from "../types/types";
import {createContext, ReactNode, useContext, useState} from "react";


interface UserInfoState {
    name: string;
    setName: (name: string) => void;
    weight: string;
    setWeight: (weight: string) => void;
}

export const UserInfoContext = createContext<UserInfoState>({
    name: "",
    setName: () => {

    },
    weight: "",
    setWeight: () => {

    },
});

export const UserInfoProvider = ({children}: { children: ReactNode }) => {

    const [name, setName] = useState<string>("");
    const [weight, setWeight] = useState<string>("");

    return (
        <UserInfoContext.Provider value={{
            name,
            setName,
            weight,
            setWeight,
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
}
