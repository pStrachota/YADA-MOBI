import {FunctionComponent} from "react";
import styled from "styled-components";
import {CardSectionProps} from "../../../../YADA1/yada1/types/types";
import CardItem from "./CardItem";
import SmallText from "../text/SmallText";

const CardList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <>
            <SmallText textStyles={{
                marginBottom: 5,
                marginTop: 15,
            }}>Recently searched</SmallText>
            <CardList
                data={props.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingRight: 25,
                }}
                renderItem={({item}: any) => <CardItem {...item} />}
                keyExtractor={({id}: any) => id.toString()}
            />
        </>
    );
}

export default CardSection;
