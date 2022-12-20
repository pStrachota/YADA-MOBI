import {FunctionComponent} from "react";
import styled from "styled-components";
import {colors} from "../colors";
import {TextProps} from "../../types/types";

const StyledText = styled.Text`
  color: ${colors.grey};
  font-size: 24px;
  text-align: left;
`;


const RegularText: FunctionComponent<TextProps> = (props) => {
    return (
        <>
            <StyledText style={props.textStyles}>{props.children}</StyledText>
        </>
    );
}

export default RegularText;
