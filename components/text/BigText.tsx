import {FunctionComponent} from "react";
import styled from "styled-components";
import {colors} from "../colors";
import {TextProps} from "../../types/types";

const StyledText = styled.Text`
  color: ${colors.green};
  font-size: 37px;
  text-align: left;
`;


const BigText: FunctionComponent<TextProps> = (props) => {
    return (
        <>
            <StyledText style={props.textStyles}>{props.children}</StyledText>
        </>
    );
}

export default BigText;
