import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import {Container} from "../components/shared";
import {colors} from "../components/colors";
import {Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native-paper";


const WelcomeContainer = styled(Container)`
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

const Welcome: FunctionComponent = () => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={require('../assets/bg/green-bg-card.jpg')}/>
                </TopSection>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                }}>
                    <Image style={{
                        width: 300,
                        height: 200,
                        alignSelf: 'center',
                        marginBottom: 20,
                    }} source={require('../assets/logo/logo2.png')}/>
                    <Button mode="contained" onPress={() => {
                        navigation.navigate("UserInfo")
                    }}>
                       Register
                    </Button>
                </View>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;
