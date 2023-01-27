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


const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {

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

    let sampleData = [
        {
            "id": "food_bxv0jv7b0z0q0yap1x0z0a5x0z0z",
            "food": "apple",
            "calories": 52.0
        },
        {
            "id": "food_bxv0jv7b0z0q0yap1x0z0a5x0z0z",
            "food": "apple",
            "calories": 52.0
        },
    ];

    return (
        <>
            <HomeContainer>
                <StatusBar style="dark"/>
                <Searchbar placeholder="Find food" onChangeText={(text) => onChangeText(text)} value={input}/>
                <FlatList style={{
                    flex: 1,
                    width: '100%',
                    marginTop: 10,
                }} data={data} keyExtractor={(item) => item.food.foodId}
                          renderItem={({item}) =>
                              <TouchableOpacity onPress={() => {
                                  navigation.navigate('Food')
                              }} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12}}>
                                  <Image
                                      source={{uri: item.food.image}}
                                      style={{width: 50, height: 50, borderRadius: 5}}/>
                                  <Text style={{marginLeft: 12, fontSize: 16}}>{item.food.label}</Text>
                              </TouchableOpacity>
                          }/>
            </HomeContainer>
        </>
    );
}

export default Home;
