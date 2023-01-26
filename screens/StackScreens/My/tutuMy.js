import React, {useState} from "react";
import {Text, View} from "react-native";
import styled from "styled-components/native";


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

const MyBox = styled.View`
  /* Box */

  position: absolute;
  width: 310px;
  height: 115px;
  left: 25px;
  top: 96px;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;
const MyIcon = styled.TouchableOpacity`
  /* iicon */
  position: absolute;
  width: 75px;
  height: 75px;
  left: 40px;
  top: 116px;

  /* gray scale/gray3 */

  background: #BBBBBB;
  border-radius: 37.5px;
`;
const MyID = styled.Text`
  /* tukorea123 */
  position: absolute;
  width: 195px;
  height: 19px;
  left: 130px;
  top: 116px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  /* gray scale/gray6 */

  color: #1D1D1D;
`;
const MyDepartment = styled.Text`
  /* 산업디자인공학/18 */
  position: absolute;
  width: 195px;
  height: 19px;
  left: 130px;
  top: 144px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray scale/gray6 */
  color: #1D1D1D;
`;
const MyPoint = styled.Text`
  /* 1,930p */

  position: absolute;
  width: 195px;
  height: 19px;
  left: 130px;
  top: 172px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-decoration-line: underline;

  /* gray scale/gray6 */

  color: #1D1D1D;
`;

const InformBox = styled.View`/* Box */


  position: absolute;
  width: 310px;
  height: 279px;
  left: 25px;
  top: 226px;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;
const ContentBox = styled.View`/* Box */

  position: absolute;
  width: 310px;
  height: 20px;
  left: 15px;
  top: 17px;
`;
const ContentText = styled.Text`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray scale/gray6 */
  color: #1D1D1D;`;
const SubheadText = styled.Text`/* 정보 */
  position: absolute;
  width: 195px;
  height: 24px;
  left: 40px;
  top: 245px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */


  /* gray scale/gray6 */

  color: #1D1D1D;`;
const ContentBtn = styled.TouchableOpacity`
  /* Vector 2 */
  position: absolute;
  left: 61.36%;
  right: 15.91%;
  top: 72.73%;
  bottom: -18.18%;

  /* gray scale/gray5 */

  border: 2.5px solid #545454;
  transform: rotate(-180deg);
`;

const AccountBox = styled.View`
  /* Box */
  position: absolute;
  width: 310px;
  height: 172px;
  left: 25px;
  top: 520px;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;
const SettingBox = styled.View`
  /* Box */
  position: absolute;
  width: 310px;
  height: 317px;
  left: 25px;
  top: 707px;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;
const OtherBox = styled.View`
  /* Box */
  position: absolute;
  width: 310px;
  height: 172px;
  left: 25px;
  top: 1039px;

  /* gray scale/gray2 */

  background: #E3E3E3;
  border-radius: 10px;
`;

const My = ({navigation: {navigate}}) => {
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
                <TitleText>내 정보</TitleText>
                <ConfigureBtn>
                    <ConfigureText>Configure</ConfigureText>
                </ConfigureBtn>
            </HeaderBox>
            <MyBox>
                <MyIcon></MyIcon>
                <MyID>tukorea12</MyID>
                <MyDepartment>산업디자인공학/18</MyDepartment>
                <MyPoint>1930p</MyPoint>
            </MyBox>

            <InformBox>
                <SubheadText>정보</SubheadText>
                <ContentBox>
                    <ContentText>쪽지 내역</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>최근에 본 글</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>내가 쓴  게시물</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>내 질문</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>스크랩</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
            </InformBox>

            <AccountBox>
                <SubheadText>계정</SubheadText>
                <ContentBox>
                    <ContentText>학교 인증</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>비밀번호 변경</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>이메일 변경</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
            </AccountBox>
            <SettingBox>
                <SubheadText>앱 설정</SubheadText>
                <ContentBox>
                    <ContentText>알람 설정</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>앱 버전</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>문의하기</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>공지사항</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>서비스 이용약관</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>개인정보 처리방침</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>오픈소스 라이선스</ContentText><ContentBtn></ContentBtn>
                </ContentBox>


            </SettingBox>
            <OtherBox>
                <SubheadText>기타</SubheadText>
                <ContentBox>
                    <ContentText>정보동의 설정</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>로그아웃</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
                <ContentBox>
                    <ContentText>회원 탈퇴</ContentText><ContentBtn></ContentBtn>
                </ContentBox>
            </OtherBox>

        </Container>
    )
}


export default My;