import React, { useState,useEffect } from "react";
import { View,Pressable, TextInput } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";
import RadioGroup from 'react-native-radio-buttons-group';
import auth from "@react-native-firebase/auth";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    width:100%;
    background-color: #FFFFFF;
`;


const Header = styled.View`
    width:310px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:20px;
    margin-top: 10px;
`;
    const HeaderText = styled.Text`
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin-top: 10px;
    `;

const InputBox = styled.View`
    width:310px;
    align-items: center;
`
    const DepartmentBox = styled.View`
        width:100%;
    `;
    const Text = styled.Text`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
    `;
    const DepartmentPress = styled.Pressable`
        border-radius:10px;
        width:100%;
        height:40px;
        background: #E3E3E3;
        margin-bottom: 30px;
    `;


const PressableBox = styled.View`
    width:310px;
    align-items: center;
`;

const DepartBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.7;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    position:absolute;
    width:86.11%;
    background-color: #FFFFFF;
    border-radius: 10px;
    align-items:center;
`;
    const ModalTitle = styled.Text`
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #1D1D1D;
    `;



const JoinPage =({navigation:{navigate}})=>{
    const [nameText,setNameText] = useState("");
    const [idText,setIdText] = useState("");
    const [pwText,setPwText] = useState("");
    const [pwCheckText,setPwCheckText] = useState("");
    const [emailText,setEmailText] = useState("");
    const [numText,setNumText] = useState("");

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '??????????????????',
            value: 'option1',
        },
        {
            id: '2',
            label: '???????????????',
            value: 'option2'
        },
        {
            id: '3',
            label: '??????????????????',
            value: 'option3'
        },
        {
            id: '4',
            label: '???????????????',
            value: 'option4'
        },
        {
            id: '5',
            label: '?????????????????????',
            value: 'option5'
        },
        {
            id: '6',
            label: '???????????????????????????',
            value: 'option6'
        },
        {
            id: '7',
            label: '???????????????',
            value: 'option7'
        },
        {
            id: '8',
            label: '??????????????????',
            value: 'option8'
        },
        {
            id: '9',
            label: '?????????????????????',
            value: 'option9'
        },
        {
            id: '10',
            label: '????????????????????????',
            value: 'option10'
        },
        {
            id: '11',
            label: '?????????-?????? ?????????',
            value: 'option11'
        },
        {
            id: '12',
            label: '????????????',
            value: 'option12'
        },
        {
            id: '13',
            label: '??????????????????',
            value: 'option13'
        }
    ]);


    const [department,setDepartment] = useState(false);
    const [finish,setFinish] = useState(false);


    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    const onPress=()=>{
        if(emailText!="" && pwText!=""){ 
            auth().createUserWithEmailAndPassword(emailText,pwText)
            .then(()=>{ //???????????? ?????? ???
                console.log("join!!");
                navigate("Tabs",{screen:"Home"})
            })
            .catch((error)=>{ //???????????? ?????? ???
                if(error.code=='auth/email-already-in-use'){ //????????? ?????? ??????
                    console.log("already exist email");
                }
                if (error.code === 'auth/invalid-email') { //email??? ????????? ?????? ?????? ???
                    console.log('That email address is invalid!');
                }
                console.error(error);
            })
        }
        else{ //email??? password??? ??? ???????????? ?????? ?????????
            return console.log("Fill email and password")
        }
    }


    return(
        <Container>
            <Header>
                <Pressable>
                    <Icon name="chevron-back-outline" size={30} color="#1D1D1D"/>
                </Pressable>
                <HeaderText>????????????</HeaderText>
                <Pressable>
                    <Icon name="close-outline" size={30} color="#1D1D1D"/>
                </Pressable>
            </Header>
            <InputBox>
                <Input title="??????" changeText={setNameText} mbottom="10"/>
                <Input title="ID" changeText={setIdText} mbottom="10"/>
                <Input title="P/W" changeText={setPwText} mbottom="10"/>
                <Input title="P/W ??????" changeText={setPwCheckText} mbottom="10"/>
                <Input title="E-mail" changeText={setEmailText} mbottom="10"/>
                <Input title="??????" changeText={setNumText} mbottom="10"/>
                <Input title="123" changeText={setNumText} mbottom="10"/>
                <DepartmentBox>
                    <Text>??????/??????</Text>
                    <DepartmentPress onPress={()=>setDepartment(true)}>
                    </DepartmentPress>
                </DepartmentBox>
            </InputBox>
            <PressableBox>
                <BlackButton title="???????????? ??????" mbottom="60" move=""/>
                <BlueButton title="???????????? ??????" click={onPress} mbottom="68"/>
            </PressableBox>
            {department?
                <>
                    <DepartBackView></DepartBackView>
                    <ModalView>
                        <ModalTitle>????????? ???????????????</ModalTitle>
                        <RadioGroup
                            containerStyle={{
                                width:"100%",
                                alignItems:"flex-start",
                            }}
                            radioButtons={radioButtons}
                            onPress={onPressRadioButton}
                        />
                    </ModalView>
                </>
            :null}
        </Container>
    )
}

export default JoinPage;