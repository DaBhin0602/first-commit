import React, { useState,useEffect } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import ModalOneOptions from "../../../components/ModalOneOptions";

const Container = styled.View`
    width:100%;
    height:100%;
    align-items: center;
    background-color: #FFFFFF;
`;


const Header = styled.View`
    width:86.11%;
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
    width:86.11%;
    align-items: center;
`
const PressableBox = styled.View`
    width:86.11%;
    align-items: center;
`;

const InfoText = styled.Text`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #818181;
`;


const IdSearchPage =()=>{
    const [nameText,setNameText] = useState("");
    const [emailText,setEmailText] = useState("");

    const [finish,setFinish] = useState(false);
    const [modalVisible,setModalVisible] = useState(false);

    useEffect(()=>{
    },[finish]);

    return(
        <Container>
            <Header>
                <Pressable>
                    <Icon name="chevron-back-outline" size={30} color="#1D1D1D"/>
                </Pressable>
                <HeaderText>아이디 찾기</HeaderText>
                <Pressable>
                    <Icon name="close-outline" size={30} color="#1D1D1D"/>
                </Pressable>
            </Header>
            <InputBox>
                <Input title="이름" changeText={setNameText} mbottom="10"/>
                <Input title="E-mail" changeText={setEmailText} mbottom="30"/>
            </InputBox>
            <PressableBox>
                <BlueButton title="아이디 찾기" click={setModalVisible} mbottom="68"/>
                {modalVisible ? <ModalOneOptions  
                        visible={modalVisible} 
                        setvisible={setModalVisible}
                        contents="이메일이 전송되었습니다. 메일이 오지 않는다면, 스팸메일함을 확인해 주세요"
                        yestext="확인">
                    </ModalOneOptions> : null}
            </PressableBox>
            <InfoText>
                ※ 가입된 아이디가 있을 경우, 입력하신 이메일{"\n"}로 아이디를 안내해 드립니다.{"\n"}※ 만약 이메일이 오지 않는다면, 스팸 메일함으{"\n"}로 이동하지 않았는지 확인해주세요.{"\n"}※ 이메일 서비스 제공자 사정에 의해 즉시 도착{"\n"}하지 않을 수 있으니, 최대{"\n"}30분 정도 기다리신 후 다시 시도해 주세요.
            </InfoText>
        </Container>
    )
}

export default IdSearchPage;