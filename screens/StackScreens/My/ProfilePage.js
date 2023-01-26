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


const NameBox = styled.View`
    margin : 5px;
    marginTop : -3px;
    marginLeft : 50px;
`;

const ImageBox = styled.View`
    width:150px;
    height:150px;
    margin : 30px;
    marginLeft : 125px;
    background-color: #BBBBBB;
`;

const BGBox = styled.View`
        width:95%;
        height:45%;
        margin : 10px;
        background-color: #E3E3E3;
        border:1px;
        border-color : #E3E3E3;
        borderRadius: 10px;
    `;

const Image1 = styled.Image`
            border:1px;
            border-color:black;
            border-radius:30px;
            width : 100%;
            height : 100%;
        `;

const BGText = styled.Text`
        width:100%;
        height:20px;
        font-size:15px;
        fontweight : bold;
        margin : 5px;
    `;
const StyleButton = styled.Pressable`
        border:1px;
        border-color:#BBBBBB;
        border-radius:3px;
        width:70px;
        height:70px;
        margin : 10px;
        background-color : #BBBBBB;
    `;

const StyleView = styled.View`
        width:95%;
        height:100px;
        background-color: #E3E3E3;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        marginLeft : 3px;
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
            <TitleText>프로필 설정</TitleText>
            <ConfigureBtn>
                <ConfigureText>Configure</ConfigureText>
            </ConfigureBtn>
        </HeaderBox>
        <View>
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
        </View>
        <BGBox>
            <BGText>프로필 이미지 구매</BGText>
            <StyleView>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            </StyleView>
            <StyleView>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            </StyleView>
            <StyleView>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            <StyleButton></StyleButton>
            </StyleView>
        </BGBox>
        </Container>
)
    }


export default My;