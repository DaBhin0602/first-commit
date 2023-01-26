import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
//----------------------------------------------------------------------------
const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 1.5%;
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
        border-color: black;
        border-radius: 3px;
        background-color: lightgray;
        width : 76%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 16px;
            color : black;
            font-weight: 600;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:30px;
            height:30px;
            margin-right: 10px;
            margin-top: 5px;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

//-----------------------------------------------------------------------------
//-----------------------------SearchFilter------------------------------------
//-----------------------------------------------------------------------------
 const SearchFilterBox = styled.View`
    width: 89.7%;
    align-self: center;
    flex-direction: row;
    //border: 1px;
    height: 35px;
    margin-bottom: 4%;
 `;   
    const FilterBox = styled.View`
        height : 25px;
        flex-direction:row;
        width: 70%;
        //border: 1px;
        margin-top: 5px;
    `;
        const Filter1 = styled.View`
            border: 1px;
            border-color: blue;
            border-radius: 5px;
            flex-direction: row;
            justify-content: center;
            padding-right: 3px;
            padding-left: 3px;
            margin-right: 5px;
        `;
            const Filter1Text = styled.Text`
                font-size: 14px;
                color: blue;
            `;
            const TextX1 = styled.Text`
                font-size: 14px;
                font-weight: 600;
            `;
        const Filter2 = styled.View`
            border: 1px;
            border-color: orange;
            border-radius: 5px;
            flex-direction: row;
            justify-content: center;
            padding-left : 3px;
            padding-right: 3px;
        `;
            const Filter2Text = styled.Text`
                font-size: 14px;
                color: orange;
            `;
            const TextX2 = styled.Text`
                color : orange;
                font-size: 14px;
                margin-right: 3px;
                font-weight: 600;
            `;
    const SearchFilterBtn = styled.View`
        background-color : #1655E9;
        border-radius: 8px;
        width: 30%;
        align-items: center;
        justify-content: center;
    `;
        const SearchFilterText = styled.Text`
            font-size: 14px;
            color: white;
        `;
//--------------------------------------------------------------------------
//------------------------------최근 게시판----------------------------------
//--------------------------------------------------------------------------
const BoardsBox = styled.View`
    margin-left:10px;
    margin-right: 10px;
    height: auto;
 `;   
    const BoardBox1 = styled.View`
        //border: 1px;
        border-radius: 15px;
        background-color: #C4BFBF;
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        margin-bottom: 10px;
    `;
        const BoardContentBox1 = styled.View`
            //border:1px;
            width: 80%;
        `;
            const TitleBox = styled.View`
                //border: 1px;
            `;
                const TitleText = styled.Text`
                    font-size: 15px;
                    font-weight: 600;
                `;
            const ContentBox= styled.View`
                height : 35px;
                //border: 1px;
            `;
                const ContentText = styled.Text`
                    font-size : 13px;
                `;
            const KeywordBox1 = styled.View`
                flex-direction: row;
                //border: 1px;
            `;
                const KeywordBox1Text = styled.View`
                    background-color: blue;
                    border-radius: 3px;
                    padding-left: 3px;
                    padding-right: 3px;
                `;
                    const KeywordText1 = styled.Text`
                        color : white;
                        margin: 2px;
                        font-size: 8px;
                    `;
        const BoardImageBox1 = styled.View`
            //border : 1px;
            align-items: center;
            justify-content: space-between;
        `;
            const ContentImage = styled.Image`
                border-radius: 5px;
                background-color: grey;
                width : 50px;
                height : 50px;
            `;
            const ReactionBox = styled.View`
                //border : 1px;
                width: 60px;
                height: 15px;
                flex-direction: row;
        `;
            const CommentIcon = styled.View`
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                `;
                const CommentText = styled.Text`
                    font-size: 10px;
                `;
                const GoodIcon = styled.View`
                    margin-left: 5px;
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                    justify-content: center;
                `;
                const GoodText = styled.Text`
                    font-size: 10px;
                `;

const Designboard_min = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn 
                    onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                    <Icon name="chevron-back-outline" size = {25} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판 이름/및 검색키워드</BoardText>   
                <SearchBtn
                    onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                    <Icon name="search-outline" size = {25}/>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
        </HeaderBox>
        <SearchFilterBox>
            <FilterBox>
             <Filter1>
                 <Filter1Text>디자인공학부</Filter1Text>
                 <TextX1> X</TextX1>
             </Filter1>
             <Filter2>
                 <Filter2Text>교양</Filter2Text>
                 <TextX2> X</TextX2>
             </Filter2>
            </FilterBox>
            <SearchFilterBtn>
               <SearchFilterText>검색필터</SearchFilterText>
            </SearchFilterBtn>
        </SearchFilterBox>
        <BoardsBox>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목을 입력하세요</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
        </BoardsBox>
    </Container>
    
)

export default Designboard_min;