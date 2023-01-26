import React, {useState} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'
import BoardBox from "../../components/BoardBox";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
  flex: 1;
  border: 1px;
  border-color: red;
  margin: 10px;
`;


const HeaderBox = styled.View`
  flex: 1;
  border: 1px;
  border-color: red;
  margin: 10px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
const TitleText = styled.Text`
  color: red;
  font-size: 10px;
`;
const BackBtn = styled.Pressable`
  border: 1px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.tomato ? "blue" : "pink"};
`;

const BackText = styled.Text`
  color: red;
  font-size: 10px;
`;
const ConfigureBtn = styled.TouchableOpacity`
  border: 1px;
  width: 30px;
  height: 30px;
`;
const ConfigureText = styled.Text`
  color: red;
  font-size: 10px;
`;




const recent = ({navigation: {navigate}}) => {
    const [click, setClick] = useState(false);

    return (
        <Container>
            <HeaderBox>
                <BackBtn
                    onPress={() => navigate("Home")}
                    onPressIn={() => setClick(true)}
                    onLongPress={() => console.log("onLongPress")}
                    onPressOut={() => setClick(false)}
                >
                    <BackText>
                        Back
                    </BackText>
                </BackBtn>
                <TitleText>내 질문</TitleText>
                <ConfigureBtn>
                    <ConfigureText>Configure</ConfigureText>
                </ConfigureBtn>
            </HeaderBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>


    )
}


export default recent;