import {StyleProp, TextStyle} from "react-native";
import {ReactNode} from "react";

export interface Food {

    foodId: string;
    uri: string;
    label: string;
    nutrients: Nutrients;
    category: string;
    categoryLabel: string;
    image: string;
}

export interface Nutrients {

    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
}

export interface TextProps {
    textStyles?: StyleProp<TextStyle>
    children: ReactNode
}

export interface Hints {

    food: Food;
    measures: Measure[];
}

export interface Measure {

    uri: string;
    label: string;
    qualified: string[];

}

export interface CardProps {
    id: string;
    food: string;
    calories: number;
}

export interface CardSectionProps {
    data: CardProps[];
}

export interface Dish {
    name: string;
    caloric: string;
    type: string;
    fat: string;
    carbon: string;
    protein: string;
    category_id: string;
}
