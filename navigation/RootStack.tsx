import {FunctionComponent} from "react";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import {colors} from "../components/colors";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import FoodScreen from "../screens/Food";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Food: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();


const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: colors.green,
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120
                },
                headerTintColor: '#fff',
                headerRightContainerStyle: {
                    paddingRight: 25,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 10,
                },
                headerRight: () => (
                    <Profile img={require('../assets/profile/profile.png')}
                             imgContainerStyles={{backgroundColor: colors.green}}/>
                )
            }} initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome}
                              options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home}
                              options={{
                                  headerTitle: (props) => (
                                      <Greeting mainText="Hey UserName1"
                                                subText="Time to check some food!" {...props} />
                                  ),
                              }}
                />
                <Stack.Screen name="Food" component={FoodScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;
