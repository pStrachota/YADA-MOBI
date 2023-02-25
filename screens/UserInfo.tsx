import React, {FunctionComponent} from "react";
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import { useUserInfoState } from "../context/UserInfoContext";
import {useNavigation} from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form'
import {HelperText} from "react-native-paper";

const UserInfo: FunctionComponent = () => {

    const {setName, setWeight} = useUserInfoState();

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onBlur'})

    const onSubmit = (data: { name: string; weight: string; }) => {
        setName(data.name)
        setWeight(data.weight)
        navigation.navigate("Home")
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 50,
        }}>
            <Controller
                control={control}
                name="name"
                render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                        style={{
                            marginBottom: 20,
                            minWidth: 185,
                        }}
                        mode={'outlined'}
                        placeholder="Enter your name here"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: 'Name is required!'
                    },
                    pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: 'Name must be a string!'
                    }
                }}
            />
            {errors.name && <HelperText style={{
                marginBottom: 20
            }} type="error">{errors.name.message}</HelperText>}
            <Controller
                control={control}
                name="weight"
                render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                        style={{
                            minWidth: 195,
                            marginBottom: 20,
                        }}
                        mode={'outlined'}
                        placeholder="Enter your weight here"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: 'Weight is required!'
                    },
                    pattern: {
                        value: /^[0-9]+$/,
                        message: 'Weight must be a positive number!'
                    }
                }}
            />
            {errors.weight && <HelperText style={{
                marginBottom: 20
            }} type="error">{errors.weight.message}</HelperText>}
            <Button disabled={!isValid} mode="contained" onPress={handleSubmit(onSubmit)}>
                Let's go!
            </Button>
        </View>
    );
}

export default UserInfo;

