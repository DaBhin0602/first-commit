import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import OptionsMenu from "react-native-option-menu";
import { Menu, MeneProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu"
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
    margin-bottom: 20px;
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
        background-color: #E3E3E3;
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
//------------------------------------------------------------------------------
//-------------------------------핫 게시판---------------------------------------
//------------------------------------------------------------------------------
const HotBoardBox = styled.View`
    //border: 1px;
    border-radius: 15px;
    height:140px; 
    width: 86%;
    align-self: center;
`;
    const HotTextBox = styled.View`
        height:40px;
        flex-direction: row;
        padding-left: 5px;
    `;
        const HotIconBox = styled.View`
            height: 30px;
            width: 30px;
            margin: 5px;
        `;   
        const HotText = styled.Text`
            color : black;
            font-size: 15px;
            padding-top: 10px;
            font-weight: 500;
        `;
    const HotArticle = styled.TouchableOpacity`
        //border: 1px;
        border-radius: 15px;
        background-color: #E3E3E3;
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
    `;
        const AricleText = styled.View`
            //border:1px;
            width: 75%;
        `;
            const ArticleTitleBox = styled.View`
                //border: 1px;
                width: 100%;
                flex-direction: row;
            `;
                const ArticleTitle = styled.Text`
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 5px;
                `;
                const ArticleTimeBox = styled.View`
                    //border: 1px;
                    height : 20px;
                    justify-content: center;
                `;
                const ArticleTime = styled.Text`
                    font-weight: 400;
                    font-size: 8px;
                    color: #818181;
                `;
            const ArticleContents = styled.Text`
                margin-top: 3px;
                font-size : 13px;
                font-weight: 400;
                color: #1D1D1D;
            `;
        const ArticleImageBox = styled.View`
            //border : 1px;
            width : 65px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;
        `;
            const HotImage = styled.Image`
                border-radius: 10px;
                background-color: #BBBBBB;
                width : 60px;
                height : 60px;
                margin-bottom: 3px;
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
                    font-size: 11px;
                `;
                const GoodIcon = styled.View`
                    margin-left: 5px;
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                    justify-content: center;
                `;
                const GoodText = styled.Text`
                    font-size: 11px;
                `;

const HotPlusBar = styled.View`
     //border:1px;
     margin-top: 10px;
     margin-left: 10px;
     margin-right: 10px;
     margin-bottom : 30px; 
     align-content: center;
     justify-content: center;
     flex-direction : row;
`;  
    const PlusBarCircle = styled.View`
        background-color: #C4BFBF;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 5px;
    `;
    const PlusBarBar = styled.View`
        background-color: #C4BFBF;
        border-radius: 5px;
        height: 5px;
        width: 60px;
        margin-right: 5px;
    `;

//----------------------------------------------------------------------------------------------
//------------------------------전공 통합 게시판-------------------------------------------------
//----------------------------------------------------------------------------------------------
 const AllBoardBox = styled.TouchableOpacity`
    width: 86%;
    height: 40px;
    margin-bottom: 30px;
    align-self: center;
    justify-content: center;
`; 
    const AllBoardText = styled.Text`
        color : white;
        font-size: 16px;
        align-self: center;
        font-weight: 600;
        margin-top: 8px;
    `;

const AllMajorBox = styled.View`
    height: auto;
    //border: 1px;
    align-self: center;
    margin-left: 11%;
    margin-right: 11%;
`; 
    const Major1 = styled.View`
        height: auto;
        width : 100%;
        flex-direction: row;
        align-items: center;
    `;
        const Major11 = styled.TouchableOpacity`
            //border: 1px;
            width : 30%;
            height : 100%;
            align-items: center;
        `;
            const Image11 = styled.View`
                //border: 1px;
                border-radius: 40px;
                background-color: #E3E3E3;
                width: 80px;
                height: 80px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox11 = styled.View`
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image11Text = styled.Text`
                    font-size : 10px;
                    font-weight: 300;
            `;
        const Major12 = styled.TouchableOpacity`
            //border: 1px;
            width : 30%;
            height : 100%;
            margin: 4px;
            align-items: center;
        `;
            const Image12 = styled.View`
                //border: 1px;
                border-radius: 40px;
                background-color: #E3E3E3;
                width: 80px;
                height: 80px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox12 = styled.View`
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image12Text = styled.Text`
                    font-size : 10px;
                    font-weight: 300;
            `;
        const Major13 = styled.TouchableOpacity`
            //border: 1px;
            width : 30%;
            height : 100%;
            margin: 4px; 
            align-items: center;
        `;
            const Image13 = styled.View`
                //border: 1px;
                background-color: #E3E3E3;
                border-radius: 40px;
                width: 80px;
                height: 80px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox13 = styled.View`
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image13Text = styled.Text`
                    font-size : 10px;
                    font-weight: 300;
            `;

const Board_min = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn 
                    onPress={()=>navigate("Tabs",{screen:"Home"})}>
                    <Icon name="chevron-back-outline" size = {30} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판</BoardText>   
                <SearchBtn
                    onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                    <Icon name="search-outline" size = {25}/>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
        </HeaderBox>
        <HotBoardBox>
            <HotTextBox>
                <HotIconBox>
                    <Icon name="flame" size = {30} color = "#FF0000"/>
                    </HotIconBox>
                <HotText>HOT</HotText>
            </HotTextBox>
            <HotArticle
                onPress={()=>navigate("Stack",{screen:"HotBoard_min"})}>
                <AricleText>
                    <ArticleTitleBox>
                        <ArticleTitle>제목을 입력하세요</ArticleTitle>
                        <ArticleTimeBox>
                            <ArticleTime>00분 전</ArticleTime>
                        </ArticleTimeBox>
                    </ArticleTitleBox>
                    
                    <ArticleContents>내용을 입력하세요</ArticleContents>
                </AricleText>
                <ArticleImageBox>
                    <HotImage></HotImage>
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
                </ArticleImageBox>
            </HotArticle>
        </HotBoardBox>
        <HotPlusBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarBar></PlusBarBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
        </HotPlusBar>
        <AllBoardBox
            onPress={()=>navigate("Stack",{screen:"Integrated_Board_min"})}>
            <LinearGradient style={{
                width : 354,
                height:40,
                borderRadius: 10,
                backgroundColor:'#0062FF'
            }}
                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                start={{x:1,y:0}} end={{x:0,y:0}}
            >
            <AllBoardText>통합 게시판</AllBoardText>
            </LinearGradient>
            
        </AllBoardBox>
        <AllMajorBox>
            <Major1>
               <Major11
                onPress={()=>navigate("Stack",{screen:"Designboard_min"})}
               >
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
        </AllMajorBox>
    </Container>
    
)
export default Board_min;