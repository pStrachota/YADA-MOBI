import styled from "styled-components";
import {Container} from "../components/shared";
import {colors} from "../components/colors";
import {FunctionComponent, useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import CardSection from "../../../yada_github/yada/components/Cards/CardSection";
import {Text, Image, TouchableOpacity} from "react-native";
import SearchBar from "../components/SearchBar";
import {Hints} from "../types/types";
import FoodList from "../components/Search/FoodList";


const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {

    const [input, setInput] = useState("");
    const [data, setData] = useState<Hints[]>([]);

    useEffect(() => {
        setData([]);
    }, []);


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
                <SearchBar placeholder="Find food" onChangeText={() => {console.log("not implemented yet")}} value={input}/>
                <FoodList data={data} keyExtractor={(item) => item.food.foodId}
                          renderItem={({item}) =>
                              <TouchableOpacity onPress={() => {
                                  console.log("not implemented yet");
                              }} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 12}}>
                                  <Image
                                      source={{uri: item.food.image}}
                                      style={{width: 50, height: 50, borderRadius: 5}}/>
                                  <Text style={{marginLeft: 12, fontSize: 16}}>{item.food.label}</Text>
                              </TouchableOpacity>
                          }/>
                <CardSection data={sampleData}/>
            </HomeContainer>
        </>
    );
}

export default Home;
