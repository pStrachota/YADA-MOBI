import {FunctionComponent} from "react";
import {StyleProp, TextStyle} from "react-native";
import styled from "styled-components";
import {colors} from "../colors";
import RegularText from "../text/RegularText";
import SmallText from "../text/SmallText";

const StyledView = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText textStyles={[{
                color: colors.secondary,
                fontSize: 22,
            }, props.mainTextStyles]}>{props.mainText}</RegularText>
            <SmallText textStyles={[{
                color: colors.darkGrey,
                fontSize: 16,
            }, props.subTextStyles]}>{props.subText}</SmallText>
        </StyledView>
    );
};

export default Greeting;
