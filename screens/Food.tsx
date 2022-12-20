import styled from "styled-components";
import {colors} from "../components/colors";
import {Container} from "../components/shared";
import {FunctionComponent} from "react";
import {Text} from "react-native";

const FoodContainer = styled(Container)`
  background-color: ${colors.white};
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const FoodScreen: FunctionComponent = () => {

    return (
        <FoodContainer>
            <Text>Food</Text>
            <Text>Sport</Text>
        </FoodContainer>
    );
}

export default FoodScreen;
