import {FunctionComponent} from "react";
import {CardProps} from "../../../../YADA1/yada1/types/types";
import styled from "styled-components";
import {colors} from "../../../../YADA1/yada1/components/colors";
import {ScreenWidth} from "../../../../YADA1/yada1/components/shared";

const CardBackground = styled.ImageBackground`
  width: ${ScreenWidth * 0.67}px;
  height: 125px;
  resize-mode: cover;
  background-color: ${colors.secondary};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
    return (
        <>
            <CardBackground source={require('../../../../YADA1/yada1/assets/bgs/green-bg-card.jpg')}>
                <CardTouchable onPress={() => {
                    console.log("not implemented yet")
                }} underlayColor={colors.secondary}>
                    <TouchableView>
                        <CardRow/>
                        <CardRow/>
                    </TouchableView>
                </CardTouchable>
            </CardBackground>
        </>
    );
}

export default CardItem;
