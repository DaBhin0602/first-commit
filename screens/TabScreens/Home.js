import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'
import BoardBox from "../../components/BoardBox";
import ModalTwoOptions from "../../components/ModalTwoOptions";
import auth from "@react-native-firebase/auth";


//scrollView 
    //화면에 안보이는것도 한번에로딩후 화면출력
    //데이터가많으면 시간이 오래걸림
    //데이터가 적고
    //데이터끝을 알때

//flatlist
    //화면에보이는것만 그때그때 로딩하고 화면출력
    //데이터끝을 모르고
    //많을때

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    height:100%;
`;

const HeaderBox = styled.View`
    height:50px;
    width:310px;
    margin:2px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
    const LoginBtn = styled.Pressable`
        width:90px;
        height:30px;
        border-radius: 5px;
        background-color: #545454;
        justify-content: center;
        align-items: center;
    `;
        const LoginText = styled.Text`
            color:#FFFFFF;
            font-size:10px;
        `;

    const ConfigureBtn = styled.TouchableOpacity`
        width:30px;
        height:30px;
    `;


const SignBoardBox = styled.Pressable`
    width:310px;
    height:120px;
    border-radius: 10px;
    background-color: #E3E3E3;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    const MainLogoBox = styled.View`
        border: 1px;
        border-color:black;
        width:40%;
        height:50%;
    `;

    const MainTextBox = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 400;
        font-size: 8px;

        text-align: center;
    `;

    const MainTextBox2 = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;

        text-align: center;
    `;

const ImageBox = styled.View`
    height:140px;
    width:310px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;
    const Image1Box = styled.View`
        height:140px;
        width:103px;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `;
        const Image = styled.Image`
            border:1px;
            border-color:black;
            border-radius:40px;
            width:80px;
            height:80px;
        `;
        const ImageTextBox = styled.Text`
            width:100%;
            height:14px;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
        `;
    const Image2Box = styled.View`
        height:140px;
        width:103px;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `;
        const Image2 = styled.Image`
        border:1px;
        border-color:black;
        border-radius:40px;
        width:80px;
        height:80px;
        `;
        const Image2TextBox = styled.Text`
            width:100%;
            height:14px;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
        `;
    const Image3Box = styled.View`
        height:140px;
        width:103px;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `;
        const Image3 = styled.Image`
        border:1px;
        border-color:black;
        border-radius:40px;
        width:80px;
        height:80px;
        `;
        const Image3TextBox = styled.Text`
            width:100%;
            height:14px;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
        `;
const PopularBoardBox = styled.View`
    height:100%;
    width:310px;
    margin:2px;
`;

    const PopularText = styled.Text`
        width:100%;
        height:21px;
        margin-bottom:10px;
        margin-top:10px;
        font-size: 18px;
        font-weight: 600;
        color:#0062FF;
    `;
//pressable
//---------
//onPress : 눌렀다가 뗐을때(onLongPress 실행되기 전에 떼면 발동)
//onPressIn : 누르기 시작했을때
//onLongPress : 2초이상 누르고있을때
//onPressOut : 뗐을때
//console.log() 터미널에 ()안의 값 출력(잘 돌아가나 확인할때 사용)

const Home =({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    return(
        <Container>
            <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                title="신고하기"
                contents="해당 게시물을 신고 하시겠습니까?"
                yestext="신고하기"
            />
            <HeaderBox>
                <LoginBtn 
                    onPress={()=>{auth().currentUser?navigate("Stack",{screen:"LogoutPage"}):navigate("Stack",{screen:"LoginPage"})}}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} 
                     
                    tomato={click}
                >
                    {auth().currentUser ? <LoginText>로그인함</LoginText> : <LoginText>로그인/회원가입</LoginText>}
                </LoginBtn>
                <ConfigureBtn onPress={()=>setModalVisible(true)}>
                    <Icon name="settings-outline" size={30} color="#0062FF"/>
                </ConfigureBtn>
            </HeaderBox>
            <SignBoardBox onPress={()=>navigate("Stack",{screen:"Contributor"})}>
                <MainLogoBox></MainLogoBox>
                <MainTextBox>Communication Space for TUKorea Students</MainTextBox>
                <MainTextBox2>한국공대 학생들을 위한 소통공간</MainTextBox2>
            </SignBoardBox>
            <ImageBox>
                <Image1Box>
                    <Image></Image>
                    <ImageTextBox>마이페이지</ImageTextBox>
                </Image1Box>
                <Image2Box>
                    <Image2></Image2>
                    <Image2TextBox>게시판</Image2TextBox>
                </Image2Box>
                <Image3Box>
                    <Image3></Image3>
                    <Image3TextBox>선후배 매칭</Image3TextBox>
                </Image3Box>
            </ImageBox>
            <PopularBoardBox>
                <TouchableOpacity onPress={()=>navigate("Stack",{screen:"PopularBoard"})}>
                    <PopularText>인기글</PopularText>
                </TouchableOpacity>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
            </PopularBoardBox>
        </Container>
    )
}

export default Home;