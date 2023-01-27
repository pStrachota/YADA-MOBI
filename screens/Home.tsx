import styled from "styled-components";
import {Container} from "../components/shared";
import {colors} from "../components/colors";
import {FunctionComponent, useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {FlatList, Image, TouchableOpacity} from "react-native";
import {Hints} from "../types/types";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import {Card, Drawer, Searchbar, Text} from 'react-native-paper';
import {useFoodState} from "../context/FoodContext";


const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
  flex: 1;
`;


const CardList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const Home: FunctionComponent = () => {

    const {food, setFood, foods, setFoods} = useFoodState();

    const navigation = useNavigation();

    const [input, setInput] = useState("");
    const [data, setData] = useState<Hints[]>([]);

    useEffect(() => {
        setData([]);
    }, []);

    function onChangeText(text: string) {

        if (text.length === 0) {
            setData([]);
        }

        setInput(text)

        if (text.length > 2) {

            axios.get(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
                        "x-rapidapi-key": "994f79943amsh226ef11f9958b0ep1d35b9jsn5809bb9a2c29",
                    },
                    params: {
                        ingr: text
                    }
                })
                .then((response) => {
                        setData(response.data.hints);
                        console.log(response.data.hints);

                    }
                )
        }
    }

    return (
        <>
            <HomeContainer>
                <StatusBar style="dark"/>
                <Searchbar placeholder="Find food" onChangeText={(text) => onChangeText(text)} value={input}/>
                <FlatList style={{
                    flex: 1,
                    width: '100%',
                    marginTop: 10,
                }} data={data}
                          renderItem={({item}) =>
                              <TouchableOpacity onPress={() => {
                                  navigation.navigate('Food')
                                  // console.log(item.food);
                                  setFood(item.food)
                                  if (foods.includes(item.food)) {
                                      return;
                                  }
                                  if (foods.length > 2) {
                                      foods.pop();
                                  }
                                  setFoods([item.food, ...foods])
                              }} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12}}>

                                  {
                                      item.food.image == null ?

                                          <Image
                                              source={require('../assets/food2.png')}
                                              style={{width: 50, height: 50, borderRadius: 5}}/>
                                          :
                                          <Image
                                              source={{uri: item.food.image}}
                                              style={{width: 50, height: 50, borderRadius: 5}}/>
                                  }
                                  <Text style={{marginLeft: 12, fontSize: 16}}>{item.food.label}</Text>
                              </TouchableOpacity>
                          }/>
                {
                    foods.length > 0 &&
                    <Text style={{
                        marginVertical: 10,
                        marginLeft: 35,
                    }} variant="titleMedium">Recently searched</Text>
                }
                <CardList
                    data={foods}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingRight: 25,
                    }}
                    // renderItem={({item}: any) => <CardItem {...item} />}
                    renderItem={({item}: any) =>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Food')
                            // console.log(item.food);
                            setFood(item)
                            if (foods.includes(item)) {
                                return;
                            }
                            if (foods.length > 2) {
                                foods.pop();
                            }
                            console.log(foods.length);
                            setFoods([item, ...foods])
                        }}>
                            <Card style={{
                                marginHorizontal: 12,
                                width: 200,

                            }}>
                                {
                                    item.image == null ?
                                        <Card.Cover source={require('../assets/food2.png')}/>
                                        :
                                        <Card.Cover source={{uri: item.image}}/>
                                }

                                <Card.Content>
                                    <Card.Title title={item.label}/>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    }
                />
            </HomeContainer>
        </>
    );
}

export default Home;
