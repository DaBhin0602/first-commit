
import React, { useState } from "react";
import { Text,ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.Image`
    padding:3px;
    width:100px;
    height:100px;
    border-radius: 50px;
`;

const LoginBox = styled.View`
    border : 1px;
    padding:3px;
    width:350px;
    height:40%;
    justify-content: space-between;
`;
    const IDBox = styled.View`
        width:100%;
        height:60px;
    `;
        const IDText = styled.Text`
        `;
        const IDTextInput = styled.TextInput`
            height:70%;
            border:1px;
            border-radius: 20px;
        `;
    const PWBox = styled.View`
         width:100%;
        height:60px;
    `;
        const PWText = styled.Text`
        `;
        const PWTextInput = styled.TextInput`
            height:70%;
            border:1px;
            border-radius: 20px;
        `;
    const LoginBtn = styled.Pressable`
        width:100%;
        height:60px;
        border:1px;
        border-radius: 20px;
        //color값에 따른 css 변경
        background-color: ${(props)=>props.color?"#1124d3":"#4834d4"};
        align-items: center;
        justify-content: center;
        
    `;
        const LoginText = styled.Text`
            font-size: 20px;
        `;

const JoinSearchView = styled.View`
    border : 1px;
    padding:3px;
    width:350px;
    height:100px;
`;
    const JoinPressable = styled.Pressable``;
        const JoinText = styled.Text``;
    const IDSearchPressable = styled.Pressable``;
        const IDSearchText = styled.Text``;
    const PWSearchPressable = styled.Pressable``;
        const PWSearchText = styled.Text``;

const HelpView = styled.View`
    border : 1px;
    padding:3px;
    height:100px;
    width:350px;
`;
    const HelpTextPressable = styled.Pressable`
    `;
    const PolicyTextPressable = styled.Pressable`
    `;
    const ClauseTextPressable = styled.Pressable`
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

const LoginPage =()=>{
    //setIdChange()함수를 통해 idChange 변수값 변경, 초기값은 ""
    const [idChange,setIdChange] = useState("");
    const [pwChange,setPwChange] = useState("");

    const [checkIdBlank,setCheckIdBlank] = useState(true);
    const [checkPwBlank,setCheckPwBlank] = useState(true);

    const [loadingCheck,setLoadingCheck] = useState(false);

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
            setLoadingCheck(false);
            
        },3000); //3초후에 안에 실행
    }

    return (
        <Container>
            {loadingCheck ?<ActivityIndicator style={{position:"absolute"}} size="large"/> :null}
            <LogoImage
                source={require('../../images/투투로고.png')}
            />
            <LoginBox>
                <IDBox>
                    <IDText></IDText>
                    <IDTextInput
                        onChangeText={(text)=>setIdChange(text)}
                        placeholder="id 입력"
                    />
                    {checkIdBlank?null:<Text style={{color:"red"}}>id 비어있음</Text>}
                </IDBox>
                <PWBox>
                    <PWText></PWText>
                    <PWTextInput
                        onChangeText={(text)=>setPwChange(text)}
                        placeholder="pw 입력"
                    />
                    {checkPwBlank?null:<Text style={{color:"red"}}>pw 비어있음</Text>}
                </PWBox>
                <LoginBtn
                    onPress={()=>checkEmpty()}
                >
                    <LoginText>로그인</LoginText>
                </LoginBtn>
            </LoginBox>
            <JoinSearchView>
                <JoinPressable>
                    <JoinText></JoinText>
                </JoinPressable>
                <IDSearchPressable>
                    <IDSearchText></IDSearchText>
                </IDSearchPressable>
                <PWSearchPressable>
                    <PWSearchText></PWSearchText>
                </PWSearchPressable>
            </JoinSearchView>
            <HelpView>
                <HelpTextPressable></HelpTextPressable>
                <PolicyTextPressable></PolicyTextPressable>
                <ClauseTextPressable></ClauseTextPressable>
            </HelpView>
        </Container>
    )
}

export default LoginPage;