import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 35px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        //border : 1px;
        border-color: black;
        border-radius: 3px;
        width : 76%;
        height: 100%;
        justify-content: center;
    `;
        const BoardText = styled.Text`
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            margin-right: 5%;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

//HashTagBox
const HashTagBox = styled.View`
    border: 1px;
    border-color: #1398FF;
    border-radius: 10px;
    width: 92%;
    align-self: center;
    padding: 15px;
    padding-bottom: 5px;
`;
    const KeywordBox = styled.View`
    //border: 1px;
    height: auto;
`;
    const Row = styled.View`
        //border: 1px;
        height: 22px;
        margin-bottom: 5px;
        flex-direction: row;
    `;

    const Hashtag = styled.View`
        border: 1px;
        border-radius: 5px;
        border-color: #0062FF;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const HashtagText = styled.Text`
            color: #0062FF;
            text-align: center;
        `;
    const KeyBox = styled.View`
        //border: 1px;
        width: 100%;
        margin-bottom: 20px;
    `;
const TitleBox = styled.View`
    //border: 1px;
    width: 100%;
    height: auto;
    flex-direction: row;
    margin-bottom: 10px;
`;  
    const Title = styled.Text`
        font-size: 14px;
        font-weight: 700;
    `;
    const ClearTextBox = styled.View`
        //border: 1px;
        justify-content: center;
    `;
        const ChoiceText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: #FF3D00;;
        margin-left: 10px;
    `;
    const HotKeyword = styled.View`
        //border: 1px;
        border-radius: 5px;
        background-color: #AACD06;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const HotKeywordText = styled.Text`
            color: white;
            text-align: center;
        `;

const ViewMoreIcon = styled.View`
    align-self: center;
`;

const WritingBox = styled.View`
    //border: 1px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
`;
    const WritingTitleBox = styled.View`
        flex-direction: row;
        margin-bottom: 15px;
        justify-content: space-between;
    `;
        const WritingTitleText = styled.Text`
            font-size: 16px;
            font-weight: 600;
            color: #1D1D1D;
        `;
        const WritingTitlePlus = styled.View`
            //border: 1px;
            justify-content: center;
            flex-direction: row;
        `;
            const InformTextBox = styled.View`
                //border: 1px;
                justify-content: center;
            `;
            const InformText = styled.Text`
                font-size: 8px;
                font-weight: 400;
                color: #0062FF;
                margin-right: 4px;
            `;
            const RemoveBtn = styled.View`
                //border: 1px; 
                background-color: #818181;
                justify-items: center;
                width: 20px;
                height: 20px;
            `;
    const WritingContentBox = styled.View`
        //border: 1px;
        width: 100%;
        height: 350px;
        background-color: #E3E3E3;
        margin-bottom: 10px;
    `;

    const IconBox = styled.View`
        //border: 1px;
        flex-direction: row;
    `;
        const Icon1 = styled.View`
            //border: 1px;
            margin-right: 5px;
            width: 20px;
            height: 20px;
            background-color: #E3E3E3;
        `;

const AddKeywordBox = styled.View`
    //border: 1px;
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    align-self: center;
    justify-content: center;
`;
    const InputKeywordBox = styled.View`
        width: 100%;
        height: 40px;
        background-color: #E3E3E3;
        border-radius: 10px;
    `;
const CompleteBtn = styled.TouchableOpacity`
    //border: 1px;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    height: 40px;
`;
    const CompleteBtnText = styled.Text`
        font-weight: 600;
        font-size: 16px;
        color: white;
        align-self: center;
    `;
const BoardWriting_min2 = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn 
                    onPress={()=>navigate("Stack",{screen:"BoardWriting_min"})}>
                    <Icon name="chevron-back-outline" size = {30} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판 글쓰기</BoardText>   
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25} color = '#545454'/>
            </PlusBtn>
        </HeaderBox>
        <HashTagBox>
            <KeyBox>
                <KeywordBox>
                    <Row>
                        <Hashtag>
                            <HashtagText>전체학과</HashtagText>
                        </Hashtag>
                        <Hashtag>
                            <HashtagText>교양</HashtagText>
                        </Hashtag>
                        <Hashtag>
                            <HashtagText>직접작성</HashtagText>
                        </Hashtag>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <ViewMoreIcon>
                <Icon name="caret-up" size={20} color = '#00E676'/>
            </ViewMoreIcon>
        </HashTagBox>
        <WritingBox>
            <WritingTitleBox>
                <WritingTitleText>제목을 입력하세요</WritingTitleText>
                <WritingTitlePlus>
                    <InformTextBox>
                        <InformText>정보글</InformText>
                    </InformTextBox>
                    <RemoveBtn>
                        <Icon name="remove-outline" size={20} color = 'white'/>
                    </RemoveBtn>
                </WritingTitlePlus>
            </WritingTitleBox>
            <WritingContentBox></WritingContentBox>
            <IconBox>
                <Icon1>
                    <Icon name="image" size={20} color = '#545454'/>
                </Icon1>
                <Icon1>
                    <Icon name="camera" size={20} color = '#545454'/>
                </Icon1>
                <Icon1>
                    <Icon name="attach" size={20} color = '#545454'/>
                </Icon1>
            </IconBox>
        </WritingBox>
        <AddKeywordBox>
            <KeyBox>
                <TitleBox>
                    <Title>인기</Title>
                    <ClearTextBox>
                        <ChoiceText>*선택</ChoiceText>
                    </ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <TitleBox>
                <Title>키워드 추가</Title>
                <ClearTextBox>
                    <ChoiceText>*선택</ChoiceText>
                </ClearTextBox>
            </TitleBox>
            <InputKeywordBox></InputKeywordBox>
        </AddKeywordBox>
        <CompleteBtn
            onPress={()=>navigate("Stack",{screen:"BoardWriting_min2"})}>
            <LinearGradient style={{
                margin:0,
                height:40,
                borderRadius: 10,
                backgroundColor:'#0062FF',
                paddingTop:8
            }}
                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                start={{x:1,y:0}} end={{x:0,y:0}}
            >
                <CompleteBtnText>작성 완료</CompleteBtnText>                   
            </LinearGradient>
        </CompleteBtn>
    </Container>
)
export default BoardWriting_min2;