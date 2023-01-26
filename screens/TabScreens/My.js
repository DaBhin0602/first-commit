import React, {useState} from "react";
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
    height : 100px;
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

const BackBtn = styled.Pressable`
        border: 1px;
        width:30px;
        height:30px;
        background-color: ${(props)=>props.tomato ? "blue":"pink"};
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

const InformText = styled.Text`
        font-size:15px;
        margin : 3px;
    `;

const InformBtn = styled.Pressable`
    width:95%;
    height:100px;
    margin : 10px;
    background-color: #E3E3E3;
    border:1px;
    border-color : #E3E3E3;
    borderRadius: 10px;
    flex-direction:row;
    align-items: center;
`;

const NameBox = styled.View`
    margin : 5px;
    marginTop : -3px;
    marginLeft : 10px;
`;

const ImageBox = styled.View`
    width:80px;
    height:80px;
    margin:10px;
    background-color: #BBBBBB;
`;

const BGBox = styled.View`
        width:95%;
        height:20%;
        margin : 10px;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
        background-color: #E3E3E3;
        border:1px;
        border-color : #E3E3E3;
        borderRadius: 10px;
    `;

const Image1 = styled.Image`
            border:1px;
            border-color:black;
            border-radius:30px;
            width:100%;
            height:100%;
        `;
const Image1TextBox = styled.View`
            border:1px;
            border-color:black;
            width:100px;
            height:20px;
        `;

const PopularBoardBox = styled.View`
    flex:5;
    border:1px;
    border-color:red;
    margin:10px;
    align-items: center;
`;
const BGText = styled.Text`
        width:100%;
        height:20px;
        font-size:15px;
        fontweight : bold;
        margin : 5px;
        marginLeft : 30px;
    `;
const PopualrBox = styled.View`
        border:1px;
        border-color:blue;
        width:95%;
        height:30px;
        margin-top: 6px;
    `;

const NotionBtn = styled.TouchableOpacity`
border:1px;
width:30px;
height:30px;
`;
const NotionText = styled.Text`
color:black;
font-size:10px;
`;

const ServiceBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const ServiceText = styled.Text`
        color:black;
        font-size:10px;
    `;

const My = ({navigation:{navigate}}) => {
    const [click,setClick] = useState(false);

    return(
    <Container>
        <HeaderBox>
        <BackBtn 
                    onPress={()=>navigate("Home")}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} 
                >
                <BackText>
                        Back
                </BackText>
                </BackBtn>
            <TitleText>내 정보</TitleText>
            <ConfigureBtn>
                <ConfigureText>Configure</ConfigureText>
            </ConfigureBtn>
        </HeaderBox>
        <View>
        <InformBtn onPress={()=>navigate("Stack",{screen:"ProfilePage"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} >
        <ImageBox>
            <Image1></Image1>
        </ ImageBox>
        <NameBox>
                <InformText>
                    aaa
                </InformText>
                <InformText>
                    bbb
                </InformText>
                <InformText>
                    ccc
                </InformText>
        </NameBox>
        </InformBtn>
        </View>
        <BGBox>
            <BGText>정보</BGText>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>계정</BGText>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>앱설정</BGText>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox><NotionBtn onPress={()=>navigate("Stack",{screen:"ServicePage"})}>
                <NotionText>▶</NotionText></NotionBtn></PopualrBox>
            <PopualrBox><NotionBtn onPress={()=>navigate("Stack",{screen:"NotionPage"})}>
                <NotionText>▶</NotionText></NotionBtn></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>기타</BGText>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
            <PopualrBox></PopualrBox>
        </BGBox>
        </Container>
)
    }


export default My;