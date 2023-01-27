import React, {FunctionComponent} from "react";
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import { useUserInfoState } from "../context/UserInfoContext";
import {useNavigation} from "@react-navigation/native";


const UserInfo: FunctionComponent = () => {

    const {name, setName, weight, setWeight, age, setAge, height, setHeight} = useUserInfoState();

    const navigation = useNavigation();

    return (
        <>
            <View  >

                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />

                <TextInput
                    label="Weight"
                    value={weight}
                    onChangeText={text => setWeight(text)}
                />

                <TextInput
                    label="Age"
                    value={age}
                    onChangeText={text => setAge(text)}
                />

                <TextInput
                    label="Height"
                    value={height}
                    onChangeText={text => setHeight(text)}
                />

                <Button mode="contained" onPress={() => {
                    navigation.navigate("Home")
                }}>
                    Let's go!
                </Button>
            </View>
        </>
    );
}

export default UserInfo;

