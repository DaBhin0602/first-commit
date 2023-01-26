import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import BoardBox_min from "../../../components/BoardBox_min";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
//----------------------------------------------------------------------------
const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 10px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 3px;
        background-color: lightgray;
        width : 76%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 16px;
            color : black;
            font-weight: 600;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:30px;
            height:30px;
            margin-right: 10px;
            margin-top: 5px;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

        
const Integrated_Board_min = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn 
                    onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                    <Icon name="chevron-back-outline" size = {25} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판 이름/및 검색키워드</BoardText>   
                <SearchBtn
                    onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                    <Icon name="search-outline" size = {25}/>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
        </HeaderBox>
        <KeywordSearchBox_min></KeywordSearchBox_min>
        <BoardBox_min/>
        <BoardBox_min/>
        <BoardBox_min/>
        <BoardBox_min/>
        <BoardBox_min/>
        <BoardBox_min/>
    </Container>
    
)

export default Integrated_Board_min;