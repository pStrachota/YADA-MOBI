import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import {Image, View} from "react-native";
import {Button, Switch, Text} from "react-native-paper";
import {useTheme} from "../context/ThemeContext";
import {useVoiceReaderState} from "../context/VoiceReaderContext";


const Settings: FunctionComponent = () => {

    const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme();
    const {toggleVoiceReader, isEnabled} = useVoiceReaderState();


    return (
        <>
            <StatusBar style="light"/>
            <View style={{
                flex: 1,
                marginTop: 50,
                // justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <Text variant="titleMedium">Set high contrast theme</Text>
                <Switch value={isDarkTheme} onValueChange={toggleThemeType}/>
                <Text variant="titleMedium">Enable voice helper</Text>
                <Switch value={isEnabled} onValueChange={toggleVoiceReader}/>
            </View>

        </>
    );
};

export default Settings;
