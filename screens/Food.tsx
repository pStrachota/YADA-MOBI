import styled from "styled-components";
import {colors} from "../components/colors";
import {Container} from "../components/shared";
import React, {FunctionComponent, useEffect} from "react";
import {View} from "react-native";
import {Card, DataTable, Divider, List, Text, Button, Badge} from "react-native-paper";
import {useFoodState} from "../context/FoodContext";
import {useVoiceReaderState} from "../context/VoiceReaderContext";
import * as Speech from 'expo-speech'

const FoodScreen: FunctionComponent = () => {

    const {food, setFood} = useFoodState();

    const {toggleVoiceReader, isEnabled} = useVoiceReaderState();


    useEffect(() => {

        if (isEnabled) {
            Speech.speak('On this screen you can see the nutritional information of the food you searched for.' +
                'The information is presented in a table. The first column shows the name of the nutrient, and the second column shows the amount of the nutrient in the food you searched for.' +
                'The table is followed by a card that shows the name of the food, the image of the food, and the amount of calories in the food.' +
                'You can go back to the home screen by pressing the back button in the top left corner of the screen.' +
                'Now i will tell about nutrition facts of the' + food.label + "." +
                'Nutrition per 100g: ' + food.nutrients.ENERC_KCAL + " calories"
                + food.nutrients.CHOCDF + ' Carbs: '
                + food.nutrients.PROCNT + ' Protein: '
                + food.nutrients.FAT + ' Fat: ' +
                + food.nutrients.FIBTG + ' Fiber: ' +
                'In order to burn' + food.nutrients.ENERC_KCAL + ' calories' +
                'You need to do the following exercises: ' +
                'Running for' + Math.round(food.nutrients.ENERC_KCAL / 280 * 60) + 'minutes.' +
                'Swimming for' + Math.round(food.nutrients.ENERC_KCAL / 487 * 60) + 'minutes.' +
                'Cycling for' + Math.round(food.nutrients.ENERC_KCAL / 298 * 60) + 'minutes.' +
                'Walking for' + Math.round(food.nutrients.ENERC_KCAL / 133 * 60) + 'minutes.' +
                'Doing yoga for' + Math.round(food.nutrients.ENERC_KCAL / 183 * 60) + 'minutes.', {language: 'en-US'});
        }
    }, []);

    return (
        <>
            <Card>
                <Card.Content>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,

                    }}>
                        <Text style={{
                            // marginBottom: 10,
                        }} variant="titleLarge">{food.label}</Text>
                        {food.nutrients.ENERC_KCAL > 400 ?
                            <Badge style={{
                                marginLeft: 20,
                                backgroundColor: "#d30404"
                            }} size={35}>High
                                Calories</Badge> :
                            <Badge style={{
                                marginLeft: 20,
                                backgroundColor: "#0dc50d"

                            }} size={35}>Low
                                Calories</Badge>
                        }
                    </View>
                </Card.Content>
                {
                    food.image == null ? <Card.Cover source={require('../assets/food2.png')}/> :
                        <Card.Cover style={{
                            // width: 300,
                            height: 230,
                            marginHorizontal: 20,
                        }} source={{uri: food.image}}/>
                }
            </Card>
            <DataTable style={{marginRight: 30}}>
                <DataTable.Header>
                    {/*<DataTable.Title>{food.label}</DataTable.Title>*/}
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Carbs</DataTable.Title>
                    <DataTable.Title numeric>Protein</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                    <DataTable.Title numeric>Fiber</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell numeric>{Math.round(food.nutrients.ENERC_KCAL)}</DataTable.Cell>
                    <DataTable.Cell numeric>{Math.round(food.nutrients.CHOCDF)}</DataTable.Cell>
                    <DataTable.Cell numeric>{Math.round(food.nutrients.PROCNT)}</DataTable.Cell>
                    <DataTable.Cell numeric>{Math.round(food.nutrients.FAT)}</DataTable.Cell>
                    <DataTable.Cell numeric>{Math.round(food.nutrients.FIBTG)}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <Divider/>
            <Text style={{marginTop: 15, marginLeft: 20}} variant="titleLarge">In order to
                burn {food.nutrients.ENERC_KCAL} calories</Text>
            <Text style={{marginLeft: 20}} variant="titleLarge">You will need to:</Text>
            <List.Item
                title={"Jog " + Math.round(food.nutrients.ENERC_KCAL / 280 * 60) + " minutes"}
                left={props => <List.Icon {...props} icon="run"/>}
            />
            <List.Item
                title={"Swim " + Math.round(food.nutrients.ENERC_KCAL / 487 * 60) + " minutes"}
                left={props => <List.Icon {...props} icon="swim"/>}
            />

            <List.Item
                title={"Walk " + Math.round(food.nutrients.ENERC_KCAL / 133 * 60) + " minutes"}
                left={props => <List.Icon {...props} icon="walk"/>}
            />
            <List.Item
                title={"Cycle " + Math.round(food.nutrients.ENERC_KCAL / 298 * 60) + " minutes"}
                left={props => <List.Icon {...props} icon="bike"/>}
            />
            <List.Item
                title={"Do yoga " + Math.round(food.nutrients.ENERC_KCAL / 183 * 60) + " minutes"}
                left={props => <List.Icon {...props} icon="yoga"/>}
            />
        </>
    );
}

export default FoodScreen;
