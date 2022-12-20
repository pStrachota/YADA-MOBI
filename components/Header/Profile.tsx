import styled from "styled-components";
import {FunctionComponent} from "react";
import {GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp} from "react-native";

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyles?: StyleProp<ImageStyle>;
    imgContainerStyles?: StyleProp<ImageStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyles}>
            <StyledImage style={props.imgStyles} source={props.img}/>
        </StyledView>
    );
}

export default Profile;
