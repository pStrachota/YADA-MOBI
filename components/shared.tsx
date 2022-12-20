import styled from "styled-components/native";
import {colors} from "./colors";
import {Dimensions} from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
