import styled from "styled-components";
import {FunctionComponent} from "react";

const FoodList = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 10px;
`;

interface FoodListProps {
    data: any;
    renderItem: any;
    keyExtractor: any;
}

const FoodListSection: FunctionComponent<FoodListProps> = (props) => {
    return (
        <FoodList
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={props.keyExtractor}
        />
    );
}

export default FoodListSection;


