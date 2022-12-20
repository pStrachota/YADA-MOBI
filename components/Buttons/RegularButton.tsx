import styled from "styled-components";
import {colors} from "../colors";
import React, {FunctionComponent} from "react";
import {GestureResponderEvent, StyleProp, TextStyle, ViewStyle} from "react-native";
import RegularText from "../text/RegularText";


const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.green};
  width: 80%;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    );
}

export default RegularButton;
