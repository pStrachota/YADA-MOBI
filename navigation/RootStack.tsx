import React, {FunctionComponent} from "react";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import {colors} from "../components/colors";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import FoodScreen from "../screens/Food";
import {Button, IconButton, Text} from "react-native-paper";
import {View} from "react-native";
import {useTheme} from "../context/ThemeContext";
import Settings from "../screens/Settings";
import UserInfo from "../screens/UserInfo";
import {useUserInfoState} from "../context/UserInfoContext";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Food: undefined;
    Settings: undefined;
    UserInfo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();



const RootStack: FunctionComponent = () => {

    const {name} = useUserInfoState();

    const {theme} = useTheme();

    const navigation = useNavigation();

    return (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120
                },
                headerTintColor: '#000',
                headerRightContainerStyle: {
                    paddingRight: 25,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 10,
                },
            }} initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome}
                              options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home}
                              options={{
                                  headerTitle: (props) => (
                                      <View>
                                          <Text variant="titleMedium">
                                              Hello {name}!
                                          </Text>
                                          <Text variant="titleMedium">
                                              Time to check some food!
                                          </Text>
                                      </View>
                                  ),
                                  headerRight: () => (
                                      <IconButton
                                          icon="cog"
                                          iconColor="black"
                                          // iconColor={MD3Colors.error50}
                                          size={40}
                                          onPress={() => {
                                              navigation.navigate("Settings")
                                          }}
                                      />
                                  ),
                              }}
                />
                <Stack.Screen name="Food" component={FoodScreen}/>
                <Stack.Screen options={{
                    headerTitle: "Settings"
                }} name="Settings" component={Settings}/>
                <Stack.Screen options={{
                    headerTitle: "User Info"
                }} name="UserInfo" component={UserInfo}/>
            </Stack.Navigator>
    );
}

export default RootStack;
