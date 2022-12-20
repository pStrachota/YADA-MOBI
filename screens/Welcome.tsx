import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import {Container} from "../components/shared";
import {colors} from "../components/colors";
import RegularButton from "../components/Buttons/RegularButton";
import {Image} from "react-native";


const WelcomeContainer = styled(Container)`
  background-color: ${colors.white};
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

const Welcome: FunctionComponent = () => {

    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={require('../assets/bgs/green-bg-card.jpg')}/>
                </TopSection>
                <BottomSection>
                    <Image style={{
                        width: 300,
                        height: 300,
                        alignSelf: 'center',
                        marginBottom: 20,
                    }} source={require('../assets/logo/yada-logo.png')}/>
                    <RegularButton textStyles={{color: "white"}} onPress={() => {
                        console.log("home button pressed")
                    }}>Get started</RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;
