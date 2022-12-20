import {StyleProp, TextStyle} from "react-native";
import {ReactNode} from "react";

export interface TextProps {
    textStyles?: StyleProp<TextStyle>
    children: ReactNode
}
