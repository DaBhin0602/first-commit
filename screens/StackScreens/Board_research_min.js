import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.ScrollView.attrs(()=>({
        contentContainerStyle:{
            showVerticalScrollIndicator:false,
        }
    }))`
    flex:1;
    margin:10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    margin:10px;
    margin-left: 10px;
    margin-right: 10px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:25px;
        height:40px;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 7px;
        background-color: lightgray;
        width : 335px;
        height: 40px;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 15px;
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
//----------------------------------------------------------------
//---------------------------선택 버튼-----------------------------
//----------------------------------------------------------------
const SelectBox = styled.View`
    margin-top: 40px;
    //border : 1px;
    border-color: black;
    height: 45px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 15px;
    flex-direction:row;
    justify-content: space-between;
`;
    const Recent = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 113px;
        justify-content: center;
        background-color: ${(props)=>props.tomato ? "blue":"lightgray"};
    `;
        const RecentText = styled.Text`
            color : white;
            font-size: 18px;
            text-align: center;
        `;
    const HotKeyword = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 113px;
        justify-content: center;
        background-color: lightgray;
    `;
        const HotKeywordText = styled.Text`
            color : white;
            font-size: 18px;
            text-align: center;
        `;
    const KeywordFilter = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 113px;
        justify-content: center;
        background-color: lightgray;
    `;
        const KeywordFilterText = styled.Text`
            color : white;
            font-size: 18px;
            text-align: center;
            font-weight: 700;
        `;
//-------------------------------------------------------------------
//----------------------------검색 기록-------------------------------
const SeachHistoryBox = styled.View`
    //border  : 1px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    height : 30px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 8px;
    background-color: #E4E4E4 ;
`; 
    const SearchHistoryTextBox = styled.TouchableOpacity`
        //border : 1px;
        width : 90%;
        height: 100%;
        align-items: flex-start;
        justify-content: center;
    `;
        const SearchHistoryText = styled.Text`
            color : black;
            font-size: 13px;
            text-align: center;
            font-weight: 50;
        `;
    const DelectHistoryBox = styled.TouchableOpacity`
        //border : 1px;
        border-color: red;
        justify-content: center;
        height: 100%;
        width : 30px;
    `;
        const DelectHistoryText = styled.Text`
            color : red;
            font-size: 17px;
            text-align: center;
            font-weight: 400;
    `;
//-------------------------------------------------------------------
//--------------------------기록 전체 삭제----------------------------
const AllDelect = styled.TouchableOpacity`
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    height : 30px;
    justify-content: center;
    border-radius: 10px;
    background-color: #404040;
`;
    const AllDelectText = styled.Text`
        color : white;
        font-weight: 700;
        font-size: 17px;
        text-align: center;
    `;
//--------------------------------------------------------------------
//---------------------------------------------------------------------
const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: white;
    width:90%;
    height:160px;
    border-radius: 15px;
    opacity: 1;
    align-items: flex-end;
    top : 55%;
    left : 5%;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
`; 
    const Text1Box = styled.View`
        //border : 1px;
        width: 100%;
        height: 20%;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 7px;
    `;
        const Text1 = styled.Text`
            font-size: 20px;
            color : black;
            font-weight: 700;
        `;
    const Text2Box = styled.View`
        //border : 1px;
        width: 100%;
        height: 20%;
        align-items: center;
        justify-content: center;
`;
    const Text2 = styled.Text`
        font-size: 15px;
        color : black;
        font-weight: 200;
    `;
    const SelectBtnBox = styled.View`
        //border : 1px;
        width: 100%;
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 20px;
    `;
        const ModalYesPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightblue;
            width:60%;
            height:40px;
            justify-content: center;
            align-items: center;
        `;
            const ModelYesText = styled.Text`
                color : white;
                font-size: 20px;
                font-weight: 700;
            `;
        const ModalNoPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightgray;
            width:35%;
            height:40px;
            justify-content: center;
            align-items: center;
        `;
            const ModelNoText = styled.Text`
                color : black;
                font-size: 20px;
                font-weight: 700;
            `;



const Board_research_min = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)

    return(
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <Text1Box>
                        <Text1>전체 삭제</Text1>
                    </Text1Box>
                    <Text2Box>
                        <Text2>최근 검색 기록을 전체 삭제 하시겠습니까?</Text2>
                    </Text2Box>
                    <SelectBtnBox>
                        <ModalNoPressable onPress={()=>setModalVisible(false)}>
                            <ModelNoText>
                                취소
                            </ModelNoText>
                        </ModalNoPressable>
                        <ModalYesPressable>
                            <ModelYesText>
                                삭제하기
                            </ModelYesText>
                        </ModalYesPressable>
                    </SelectBtnBox>
                </ModalView>
            </Modal>
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                        <Icon name="chevron-back-outline" size = {25} />
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <BoardText>디자인문화리서치</BoardText>   
                    <SearchBtn
                        onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                     <Icon name="search-outline" size = {25}/>
                    </SearchBtn>
                </BoardTextBox>
            </HeaderBox>
            <SelectBox>
                <Recent>
                    <RecentText>최근 검색어</RecentText>
                </Recent>
                <HotKeyword>
                    <HotKeywordText>인기 키워드</HotKeywordText>
                </HotKeyword>
                <KeywordFilter>
                    <KeywordFilterText>검색 필터</KeywordFilterText>
                </KeywordFilter>
            </SelectBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryText>X</DelectHistoryText>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <AllDelect ConfigureBtn onPress={()=>setModalVisible(true)}>
                <AllDelectText>검색기록 전체삭제</AllDelectText>
            </AllDelect>

        </Container>
)}
export default Board_research_min;