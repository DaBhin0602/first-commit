import React, { useEffect, useState } from "react";
import { Text,ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";
import auth from "@react-native-firebase/auth";


const Container = styled.ScrollView.attrs(()=>({
        contentContainerStyle:{
            showsVerticalScrollIndicator:false,
            alignItems:"center"
        }
    }))`

`;


const LogoImage = styled.Image`
    width:100px;
    height:164px;
    border:1px;
`;

const LoginBox = styled.View`
    border-bottom-width: 1px;
    width:310px;
    margin-bottom:30px;
`;

const JoinSearchView = styled.View`
    width:310px;
`;
const HelpView = styled.View`
    width:310px;
`;
    const HelpTextPressable = styled.Pressable`
        align-items: center;
        margin-bottom:3px;
    `;
        const HelpText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;
    const PolicyTextPressable = styled.Pressable`
            align-items: center;
            margin-bottom:3px;
    `;
        const PolicyText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;
    const ClauseTextPressable = styled.Pressable`
            align-items: center;
            margin-bottom:75px;
    `;
        const ClauseText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;


//const LoginPage=()=>()
//const LoginPage=()=>{return()}
//둘의 차이
//const LoginPage=()=>() : return이 생략 되어있음 return()안의 값은 UI만 반환가능
//const LoginPage=()=>{
// .....기능 구현.....
//    return()
//}
//중괄호 안에 변수선언 이나 useState(),useEffect등등 사용가능

const LoginPage =({navigation:{navigate}})=>{
    //setIdChange()함수를 통해 idChange 변수값 변경, 초기값은 ""
    const [idChange,setIdChange] = useState("");
    const [pwChange,setPwChange] = useState("");

    const [checkIdBlank,setCheckIdBlank] = useState(true);
    const [checkPwBlank,setCheckPwBlank] = useState(true);

    const [loadingCheck,setLoadingCheck] = useState(false);
    const [finish,setFinish] = useState(false);




    const checkEmpty=()=>{
        setLoadingCheck(true);
        setTimeout(()=>{
            //textInput 비어있는지 확인
            if(idChange==""){
                setCheckIdBlank(false);
            }
            else{
                setCheckIdBlank(true);
            }

            if(pwChange==""){
                setCheckPwBlank(false);
            }
            else{
                setCheckPwBlank(true);
            }
            if(checkIdBlank==true && checkPwBlank==true){
                
                  auth().signInWithEmailAndPassword(idChange,pwChange)
                  .then(()=>console.log("login"))
                  .catch(()=>console.log("loginfail"))
            }
            setLoadingCheck(false);
            
        },3000); //3초후에 안에 실행
    }

    return (
        <Container>
            {loadingCheck ?<ActivityIndicator style={{position:"absolute"}} size="large"/> :null}
            <LogoImage
                source={require('../../../images/투투로고.png')}
            />
            <LoginBox>
                    <Input title="ID" changeText={setIdChange} mbottom="10"/>
                        {checkIdBlank?null:<Text style={{color:"red",marginBottom:10}}>id 비어있음</Text>}
                    <Input title="P/W" changeText={setPwChange} mbottom="20"/>
                        {checkPwBlank?null:<Text style={{color:"red",marginBottom:10}}>pw 비어있음</Text>}
                    <BlueButton title="로그인" click={checkEmpty} mbottom="35"/>
            </LoginBox>
            <JoinSearchView>
                <BlackButton title="회원가입" mbottom="30" move="JoinPage"/>
                <BlackButton title="아이디 찾기" mbottom="10" move="IdSearchPage"/>
                <BlackButton title="비밀번호 찾기" mbottom="45" move=""/>
            </JoinSearchView>
            <HelpView>
                <HelpTextPressable>
                    <HelpText>도움말</HelpText>
                </HelpTextPressable>
                <PolicyTextPressable>
                    <PolicyText>개인정보처리방침</PolicyText>
                </PolicyTextPressable>
                <ClauseTextPressable>
                    <ClauseText>약관</ClauseText>
                </ClauseTextPressable>
            </HelpView>
        </Container>
    )
}

export default LoginPage;