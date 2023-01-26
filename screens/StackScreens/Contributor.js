import react from "react"
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import styled from "styled-components/native";
import BlueButton from "../../components/BlueButton";


const Container = styled.View`
    width:100%;
    height:100%;
    align-items: center;
`;

const EntireView = styled.ScrollView.attrs(props=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        showHorizontalScrollIndicator:false,
        alignItems:"center",
    }
}))`
    width:86.11%;  
`;

const HeaderBar = styled.View`
    width:100%;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    margin-bottom:10px;
`;
    const TitleText = styled.Text`
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    `;

const CenterBox = styled.View`
    width:100%;
    flex-direction:column;
`;
    const ImageView = styled.View`
        border-radius: 10px;
        background-color: #E3E3E3;
        width:100%;
        height:150px;
        align-items: center;
        justify-content: center;
        margin-bottom:12.13px;
    `;
        const ImageLogo = styled.Image`
            border:1px;
            width:105px;
            height:65px;
        `;
        const ImageText = styled.Text`
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
        `;

const BottomBox = styled.View`
    width:100%;
    flex-direction:column;
`;
    const ProfileLine = styled.View`
        width:100%;
        flex-direction: row;
        align-items:center;
        justify-content: space-between;
    `;
        const ProfileBox = styled.View`
            width:90px;
            flex-direction:column;
            align-items: center;
        `;
            const ProfileImage = styled.Image`
                width:80px;
                height:80px;
                border-radius:40px;
                background-color: #E3E3E3;
                margin-bottom: 10px;
            `;  
            const ProfileName = styled.Text`
                font-weight: 600;
                font-size: 10px;
                line-height: 12px;
            `;
            const ProfileDescript = styled.Text`
                text-align:center;
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;

                margin-bottom: 40px;
            `;

const Contributor= ()=>{
    return(
        <Container>
            <EntireView>
                <HeaderBar>
                    <Icon name="chevron-back-outline" size={25} color="black"/>
                    <TitleText>만든 사람들</TitleText>
                    <Text>         </Text>
                </HeaderBar>
                <CenterBox>
                    <ImageView>
                        <ImageLogo />
                        <ImageText>TUTU는 후배들에게 더 나은 학교를 선물해주기위한 목적으로 2021~2023년에 걸쳐 한국공학대 학생들에 의해 제작된 한국공학대 학생전용 어플리케이션 입니다.</ImageText>
                    </ImageView>
                    <BlueButton title="유지보수 참여하기" click={null} mbottom="27.87"/>
                </CenterBox>
                <BottomBox>
                    <ProfileLine>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>이다빈</ProfileName>
                            <ProfileDescript>총괄/디자인팀 팀장{"\n"}산디공(19)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>최성원</ProfileName>
                            <ProfileDescript>개발팀 팀장{"\n"}소공(17)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>김민정</ProfileName>
                            <ProfileDescript>개발팀 팀원{"\n"}전자(20)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>조준서</ProfileName>
                            <ProfileDescript>개발팀 팀원{"\n"}전자(20)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>정수인</ProfileName>
                            <ProfileDescript>디자인팀 팀원{"\n"}산디공(18)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>박준범</ProfileName>
                            <ProfileDescript>개발팀 팀원{"\n"}겜공(19)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>최준서</ProfileName>
                            <ProfileDescript>디자인팀 팀원{"\n"}산디공(22)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>이정우</ProfileName>
                            <ProfileDescript>개발팀 팀원{"\n"}임베(19)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>이 영</ProfileName>
                            <ProfileDescript>디자인팀 팀원{"\n"}미디공(22)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>이재훈</ProfileName>
                            <ProfileDescript>기획참여/디자인 도움{"\n"}미디공(17)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                </BottomBox>
            </EntireView>
        </Container>
    )
}

export default Contributor;