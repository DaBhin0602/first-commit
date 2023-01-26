import React, {useState} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'
import BoardBox from "../../components/BoardBox";
import ModalTwoOptions from "../../components/ModalTwoOptions";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
  flex: 1;
  border: 1px;
  border-color: red;
  margin: 10px;
`;


const HeaderBox = styled.View`
  flex: 1;
  border: 1px;
  border-color: red;
  margin: 10px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
const TitleText = styled.Text`
  color: red;
  font-size: 10px;
`;
const BackBtn = styled.Pressable`
  border: 1px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.tomato ? "blue" : "pink"};
`;

const BackText = styled.Text`
  color: red;
  font-size: 10px;
`;
const ConfigureBtn = styled.TouchableOpacity`
  border: 1px;
  width: 30px;
  height: 30px;
`;
const ConfigureText = styled.Text`
  color: red;
  font-size: 10px;
`;


const ContentBox = styled.View`
  /* Box */
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
  padding-right: 20px;
`;
const ContentText = styled.Text`
  /* 제목을 입력하세요 제목을 입력하세요 제목을 입력하세요 제목을 입력하세요 제목을 입력하 */
  position: absolute;
  left: 4.84%;
  right: 23.23%;
  top: 36.19%;
  bottom: 35.81%;

  /* Main7 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  /* gray scale/gray6 */

  color: #1D1D1D;
`;

const CommentBox = styled.View`
  position: absolute;
  left: 8.06%;
  right: 0%;
  top: 0%;
  bottom: 0.35%;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;
const recent = ({navigation: {navigate}}) => {
    const [click, setClick] = useState(false);

    return (
        <Container>
            <HeaderBox>
                <BackBtn
                    onPress={() => navigate("Home")}
                    onPressIn={() => setClick(true)}
                    onLongPress={() => console.log("onLongPress")}
                    onPressOut={() => setClick(false)}
                >
                    <BackText>
                        Back
                    </BackText>
                </BackBtn>
                <TitleText>내가 쓴 댓글</TitleText>
                <ConfigureBtn>
                    <ConfigureText>Configure</ConfigureText>
                </ConfigureBtn>
            </HeaderBox>
            <ContentBox>
                <TitleText></TitleText><InformBtn></InformBtn><GoodBtn></GoodBtn><SmConfigureBtn></SmConfigureBtn>
                <ContentText></ContentText>
                <TimeText></TimeText><Goodicon></Goodicon><GoodText></GoodText>
            </ContentBox>
            <CommentBox>
                <TitleText></TitleText><GoodBtn></GoodBtn><SmConfigureBtn></SmConfigureBtn>
                <ContentText></ContentText>
                <TimeText></TimeText><Goodicon></Goodicon><GoodText></GoodText>
            </CommentBox>

    )
}


export default recent;