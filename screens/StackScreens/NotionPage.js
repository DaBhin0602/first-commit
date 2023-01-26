import React from "react";
import { Text, View} from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;
`;

const HeaderBox = styled.View`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
`;
const TitleText = styled.Text`
            color:red;
            font-size:10px;
        `;
const BackBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const BackText = styled.Text`
            color:red;
            font-size:10px;
        `;
const ConfigureBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const ConfigureText = styled.Text`
            color:red;
            font-size:10px;
        `;

const ImformText = styled.Text`
        color:red;
        font-size:10px;
    `;



const PopularBoardBox = styled.View`
    flex:5;
    border:1px;
    border-color:red;
    margin:10px;
    align-items: center;
`;
const PopularText = styled.Text`
        border:1px;
        border-color:blue;
        width:100%;
        height:20px;
        font-size:15px;
    `;
const PopualrBox = styled.View`
        border:1px;
        border-color:blue;
        width:95%;
        height:30px;
        margin-top: 6px;
    `;


const NotionPage = () => (
    <Container>
        <HeaderBox>
            <BackBtn onPress={() => navigate("Stack", { screen: "BackPage" })}>
                <BackText>Back</BackText>
            </BackBtn>
            <TitleText>공지사항</TitleText>
            <ConfigureBtn>
                <ConfigureText>Configure</ConfigureText>
            </ConfigureBtn>
        </HeaderBox>
        <PopularBoardBox>
            <PopualrBox>자동신고시스템 업데이트 안내</PopualrBox>
            <PopualrBox>TUTU 개인정보 처리방침 안내</PopualrBox>
            <PopualrBox>서비스 이용약관 개정 안내</PopualrBox>
            <PopualrBox>자동 신고시스템 업데이트 안내</PopualrBox>
            <PopualrBox>자동 신고시스템 업데이트 안내</PopualrBox>
            <PopualrBox>서비스 이용약관 개정 안내</PopualrBox>
        </PopularBoardBox>
        </Container>
)

export default NotionPage;