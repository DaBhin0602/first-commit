import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import AllBoardBox_min from "../../../components/AllBoardBox_min";
import CommentBox_min from "../../../components/CommentBox_min";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 3%;
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

const InputWindow = styled.TouchableOpacity`
    margin-top: 6%;
    background-color: gray;
    border-radius: 10px;
    width: 86%;
    height: 5.5%;
    align-self: center;
    justify-content: space-between;
    flex-direction: row;
`;      
    const InputText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: white;
        margin-left: 4.8%;
        margin-top: 3.2%;
    `;
    const InputIcon = styled.View`
        width: 25px;
        height: 25px;
        border: 1px;
        margin-top: 2%;
        margin-right: 1.75%;
    `;


const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: white;
    width:88.9%;
    height:15.2%;
    border-radius: 10px;
    opacity: 1;
    top : 42.9%;
    left : 5.55%;
    padding-top: 1.93%;
    padding-bottom: 2.07%;
    padding-left: 4.68%;
    padding-right: 4.68%;
    justify-content: space-between;
`; 
    const Text1Box = styled.View`
        //border : 1px;
        width: 100%;

        align-items: center;
        justify-content: center;
        margin-bottom: 7px;
    `;
        const Text1 = styled.Text`
            font-size: 18px;
            color : black;
            font-weight: 600;
        `;
    const SelectBtnBox = styled.View`
        //border : 1px;
        width: 100%;
        height: 36.4%;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    `;
        const ModalYesPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightblue;
            width:63.4%;
            height:100%;
            justify-content: center;
            align-items: center;
        `;
            const ModelYesText = styled.Text`
                color : white;
                font-size: 16px;
                font-weight: 600;
            `;
        const ModalNoPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightgray;
            width:33.1%;
            height:100%;
            justify-content: center;
            align-items: center;
            margin-right: 3.33%;
        `;
            const ModelNoText = styled.Text`
                color : black;
                font-size: 16px;
                font-weight: 600;
            `;



const HotBoard_min = ({navigation:{navigate}})=>{
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
                        <Text1>해당 게시물을 스크랩 하시겠습니까?</Text1>
                    </Text1Box>
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
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
            </HeaderBox>
            <AllBoardBox_min/>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <InputWindow>
                <InputText>입력창</InputText>
                <InputIcon></InputIcon>
            </InputWindow>
        </Container>
    )
}
export default HotBoard_min;