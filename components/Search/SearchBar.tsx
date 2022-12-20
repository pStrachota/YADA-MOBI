import styled from "styled-components";
import {FunctionComponent} from "react";
import {colors} from "../colors";

const SearchBarContainer = styled.TextInput`
  height: 40px;
  width: 80%;
  margin-top: 10px;
  margin-horizontal: 12px;
  border-width: 1px;
  border-color: ${colors.primary};
  padding-horizontal: 10px;
  border-radius: 5px;
`;

interface SearchBarProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
    return (
        <SearchBarContainer value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText}/>
    );
}

export default SearchBar;
