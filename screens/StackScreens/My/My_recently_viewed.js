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

const DeleteText = styled.Text`
  position: absolute;
  left: 31.29%;
  right: 31.61%;
  top: 20%;
  bottom: 16.67%;

  /* Title text / 4 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  /* gray scale/gray1 */

  color: #FFFFFF;`;
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
const BGDeleteBtn = styled.TouchableOpacity`
  /* Vector 181 (Stroke) */
  position: absolute;
  left: -12.5%;
  right: -12.5%;
  top: -12.5%;
  bottom: -12.5%;

  /* system/red */

  background: #FF3D00;
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
const ContentTag = styled.Text`
  /* #키워드 */
  position: absolute;
  left: 17.5%;
  right: 17.5%;
  top: 13.33%;
  bottom: 20%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  text-align: center;

  /* gray scale/gray1 */

  color: #FFFFFF;
`;


const recent = ({navigation: {navigate}}) => {
    const [click, setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
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
                <TitleText>최근 본 글</TitleText>
                <ConfigureBtn>
                    <ConfigureText>Configure</ConfigureText>
                </ConfigureBtn>
            </HeaderBox>
            <BGDeleteBtn><DeleteText>검색기록전체삭제</DeleteText></BGDeleteBtn>
            <ContentBox>
                <TitleText></TitleText><DeleteBtn></DeleteBtn>
                <ContentText></ContentText>
                <ContentTag></ContentTag>
                <BadIcon>뱃</BadIcon><BadText>58</BadText><GoodIcon>굿</GoodIcon><GoodText>18</GoodText>
            </ContentBox>

    )
}


export default recent;