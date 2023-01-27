import {Food} from "../types/types";
import {createContext, ReactNode, useContext, useState} from "react";

interface FoodState {
    food: Food;
    setFood: (food: Food) => void;
    foods: Food[];
    setFoods: (foods: Food[]) => void;
}

export const FoodContext = createContext<FoodState>({
    food: {
        foodId: "",
        uri: "",
        label: "",
        nutrients: {
            ENERC_KCAL: 0,
            PROCNT: 0,
            FAT: 0,
            CHOCDF: 0,
            FIBTG: 0,
        },
        category: "",
        categoryLabel: "",
        image: "",
    },
    setFood: () => {

    }
});

export const FoodProvider = ({children}: { children: ReactNode }) => {

    const [food, setFood] = useState<Food>({
        foodId: "",
        uri: "",
        label: "",
        nutrients: {
            ENERC_KCAL: 0,
            PROCNT: 0,
            FAT: 0,
            CHOCDF: 0,
            FIBTG: 0,
        },
        category: "",
        categoryLabel: "",
        image: "",
    });

    const [foods, setFoods] = useState<Food[]>([]);

    return (
        <FoodContext.Provider value={{food, setFood, foods, setFoods}}>
            {children}
        </FoodContext.Provider>
    );
}

export const useFoodState = () => {
    const context = useContext(FoodContext);
    if (context === undefined) {
        throw new Error('useFoodState must be used within a FoodProvider');
    }
    return context;
}
