import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

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
    margin-bottom: 3%;
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
    
const BoardBox = styled.View`
    //border: 1px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 2.8%;
    height: 230px;
`;
    const WriterProfileBox = styled.View` 
        width: 100%;
        //border: 1px;
        height: 25%;
        flex-direction: row;
        padding-top: 10px;
    `;
        const WriterPicture = styled.View`
            margin-left: 20px;
            border-radius: 10px;
            background-color: #A0A0A0;
            width : 40px;
            height: 40px;
        `;
        const PostinforBox = styled.View`
            margin-right: 5px;
            //border : 1px;
            width : 60%;
            height: 40px;
            justify-content: center;
            padding-left: 5px;
        `;
            const WriterName = styled.Text`
                font-size: 12px;
                font-weight: 500;
                color: blue;
            `;
            const PostDate = styled.Text`
                font-size: 8px;
                font-weight: 300;
            `;
        const ShareIcon = styled.TouchableOpacity`
            margin-top: 20px;
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            margin-right: 5px;
            //border: 1px;
            justify-content: center;
        `;
        const SaveIcon = styled.TouchableOpacity`
            margin-top: 20px;
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            margin-right: 5px;
            //border: 1px;
            justify-content: center;
        `;
        const SendIcon = styled.TouchableOpacity`
            margin-top: 20px;
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            //border: 1px;
            justify-content: center;
        `;

    const WriterPost = styled.View`
        width: 100%;
        background-color: #CECECE;
        height: 75%;
        border-radius: 10px;
        padding-top: 15px;
    `;
        const PostTitle = styled.View`
            //border: 1px;
            margin-bottom: 10px;
            width: 86%;
            align-self: center;
        `;
            const PostTitleText = styled.Text`
                font-size : 16px;
                font-weight: 500;
            `;
        const PostContent = styled.View`
            //border: 1px;
            height: 51%;
            width: 86%;
            align-self: center;
            margin-bottom: 4%;
    `;
            const PostContentText = styled.Text`
                font-size : 12px;
                font-weight: 400;
            `;
        const OtherBox = styled.View`
            height: 11.5%;
            //border: 1px;
            flex-direction: row;
            width: 86%;
            align-self: center;
        `;
            const KeywordBox = styled.View`
                //border: 1px;
                width: 76%;
                height: 75%;
                flex-direction: row;
                margin-top: 1%;
            `;
                const KeywordBox1 = styled.View`
                        height: 15px;
                        margin-right: 5px;
                        //border: 1px;
                    `;
                        const Keyword1 = styled.View`
                            background-color: blue;
                            border-radius: 5px;
                            padding-left: 7px;
                            padding-right: 7px;
                        `;
                            const KeywordText1 = styled.Text`
                                color : white;
                                margin: 2px;
                                font-size: 8px;
                                font-weight: 600;
                            `;
                const KeywordBox2 = styled.View`
                        height: 20px;
                        margin-right: 5px;
                        //border: 1px;
                    `;
                        const Keyword2 = styled.View`
                            background-color: orange;
                            border-radius: 5px;
                            padding-left: 7px;
                            padding-right: 7px;
                        `;
                            const KeywordText2 = styled.Text`
                                color : white;
                                margin: 2px;
                                font-size: 8px;
                                font-weight: 600;
                            `;
            const WriterCommentBox = styled.View`
                //border : 1px;
                width: 24%;
                height: 100%;
                flex-direction: row;
                justify-content: space-between;
            `;
                const CommentCount = styled.View`   
                    //border: 1px;
                    width: 47%;
                    height: 100%;
                    background-color: white;
                    border-radius: 3px;
                    flex-direction: row;
                    justify-content: center;
                    padding: 2px;
                `;
                    const CommentIcon = styled.View`
                        width: 25%;
                        height: 100%;
                        //border: 1px;
                        margin-right: 5px;
                        align-self: center;
                    `;
                    const CommentText = styled.Text`
                        font-size: 10px;
                        padding-top: 1px;
                        align-self: center;
                    `;
                const GoodCount = styled.View`   
                    //border: 1px;
                    width: 47%;
                    height: 100%;
                    background-color: white;
                    border-radius: 3px;
                    flex-direction: row;
                    justify-content: center;
                    padding: 2px;
                `;
                    const GoodIcon = styled.View`
                        margin-left: 5px;
                        width: 25%;
                        height: 100%;
                        //border: 1px;
                        align-self: center;
                        margin-right: 5px;
                    `;
                    const GoodText = styled.Text`
                        font-size: 10px;
                        padding-top: 1px;
                        align-self: center;
                    `;

const CommentBox = styled.View`
    border-radius: 10px;
    background-color: #D4D4D4;
    //border: 1px;
    width: 86%;
    height: 100px;
    align-self: center;
    margin-bottom: 10px;
`;
    const CommentProfileBox = styled.View`
        width: 93.5%;
        //border: 1px;
        height: 25px;
        align-self: center;
        margin: 10px;
        flex-direction: row;
    `;  
        const ProfileImage = styled.Image`
            width: 25px;
            height: 25px;
            //border: 1px;
            background-color: gray;
            border-radius: 5px;
            margin-right : 3.2%;
        `;
        const CommentName = styled.Text`
            //border: 1px;
            font-size: 12px;
            font-weight: 500;
            width: 70%;
        `;
        const CommentMenuBox = styled.View`
            padding-top: 5px;
            //border: 1px;
            width: 21.3%;
            height: 20px;
            justify-self: center;
            flex-direction: row;
        `;
            const CocommentIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            `;
            const CommentGoodIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            `;
            const CommentPlusIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 15px;
                height: 20px;
                margin-right: 5px;
                justify-content: center;
            `;
    const CommentContent = styled.Text`
        height: 30px;
        //border: 1px;
        margin-left: 10px;
        margin-right : 10px;
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 400;
    `;
    const DataAndGoodBox = styled.View`
        //border: 1px;
        margin-left: 10px;
        margin-right : 10px;
        flex-direction: row;
    `;
        const CommentDate = styled.Text`
            font-size: 8px;
            font-weight: 400;
            margin-right: 5px;
        `;
        const CommentGood = styled.View`
            width: 10px;
            height: 10px;
            margin-right: 2px;
        `;
        const CommetGoodCnt = styled.Text`
            font-size: 10px;
            color : red;
        `;
const InputWindow = styled.TouchableOpacity`
    margin-top: 6%;
    background-color: gray;
    border-radius: 10px;
    width: 86%;
    height: 5.5%;
    align-self: center;
    justify-content: space-between;
    flex-direction: row;
`;      
    const InputText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: white;
        margin-left: 4.8%;
        margin-top: 3.2%;
    `;
    const InputIcon = styled.View`
        width: 25px;
        height: 25px;
        border: 1px;
        margin-top: 2%;
        margin-right: 1.75%;
    `;


const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: white;
    width:88.9%;
    height:15.2%;
    border-radius: 10px;
    opacity: 1;
    top : 42.9%;
    left : 5.55%;
    padding-top: 1.93%;
    padding-bottom: 2.07%;
    padding-left: 4.68%;
    padding-right: 4.68%;
    justify-content: space-between;
`; 
    const Text1Box = styled.View`
        //border : 1px;
        width: 100%;

        align-items: center;
        justify-content: center;
        margin-bottom: 7px;
    `;
        const Text1 = styled.Text`
            font-size: 18px;
            color : black;
            font-weight: 600;
        `;
    const SelectBtnBox = styled.View`
        //border : 1px;
        width: 100%;
        height: 36.4%;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    `;
        const ModalYesPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightblue;
            width:63.4%;
            height:100%;
            justify-content: center;
            align-items: center;
        `;
            const ModelYesText = styled.Text`
                color : white;
                font-size: 16px;
                font-weight: 600;
            `;
        const ModalNoPressable = styled.Pressable`
            border-radius: 5px;
            background-color: lightgray;
            width:33.1%;
            height:100%;
            justify-content: center;
            align-items: center;
            margin-right: 3.33%;
        `;
            const ModelNoText = styled.Text`
                color : black;
                font-size: 16px;
                font-weight: 600;
            `;



const HotBoard_min = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)

    return(
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <Text1Box>
                        <Text1>해당 게시물을 스크랩 하시겠습니까?</Text1>
                    </Text1Box>
                    <SelectBtnBox>
                        <ModalNoPressable onPress={()=>setModalVisible(false)}>
                            <ModelNoText>
                                취소
                            </ModelNoText>
                        </ModalNoPressable>
                        <ModalYesPressable>
                            <ModelYesText>
                                삭제하기
                            </ModelYesText>
                        </ModalYesPressable>
                    </SelectBtnBox>
                </ModalView>
            </Modal>
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
            </HeaderBox>
            <BoardBox>
                <WriterProfileBox>
                    <WriterPicture></WriterPicture>
                    <PostinforBox>
                        <WriterName>익명</WriterName>
                        <PostDate>09/26 16:00</PostDate>
                    </PostinforBox>
                    <ShareIcon>
                        <Icon name="share-social" size = {18} color = '#545454'/>
                    </ShareIcon>
                    <SaveIcon ConfigureBtn onPress={()=>setModalVisible(true)}>
                    </SaveIcon>
                    <SendIcon></SendIcon>
                </WriterProfileBox>
                <WriterPost>
                    <PostTitle>
                        <PostTitleText>제목을 입력하세요</PostTitleText>
                    </PostTitle>
                    <PostContent>
                        <PostContentText>내용을 입력하세요</PostContentText>
                    </PostContent>
                    <OtherBox>
                        <KeywordBox>
                            <KeywordBox1>
                                <Keyword1>
                                    <KeywordText1># 키워드</KeywordText1>
                                </Keyword1>
                            </KeywordBox1>
                            <KeywordBox2>
                                <Keyword2>
                                    <KeywordText2># 키워드</KeywordText2>
                                </Keyword2>
                            </KeywordBox2>
                        </KeywordBox>
                        <WriterCommentBox>
                            <CommentCount>
                                <CommentIcon>
                                    <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                                </CommentIcon>
                                <CommentText>18</CommentText>
                            </CommentCount>
                            <GoodCount>
                                <GoodIcon>
                                    <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                                </GoodIcon>
                                <GoodText>18</GoodText>
                            </GoodCount>
                        </WriterCommentBox>
                    </OtherBox>
                    
                </WriterPost>
            </BoardBox>
            <CommentBox>
                <CommentProfileBox>
                    <ProfileImage></ProfileImage>
                    <CommentName>익명 1</CommentName>
                    <CommentMenuBox>
                        <CocommentIcon>
                            <Icon name="chatbox-ellipses-sharp" size = {20} color = '#808080'/>
                        </CocommentIcon>
                        <CommentGoodIcon>
                            <Icon name="thumbs-up-sharp" size = {18} color = '#808080'/>
                        </CommentGoodIcon>
                        <CommentPlusIcon>
                            <Icon name="ellipsis-vertical-outline" size = {15}/>
                        </CommentPlusIcon>
                    </CommentMenuBox>
                </CommentProfileBox>
                <CommentContent>내용을 입력하세요</CommentContent>
                <DataAndGoodBox>
                    <CommentDate>09/26 16:00</CommentDate>
                    <CommentGood>
                        <Icon name="thumbs-up" size = {10} color = "#FF0000"/>
                    </CommentGood>
                    <CommetGoodCnt>18</CommetGoodCnt>
                </DataAndGoodBox>
            </CommentBox>
            <CommentBox>
                <CommentProfileBox>
                    <ProfileImage></ProfileImage>
                    <CommentName>익명 2</CommentName>
                    <CommentMenuBox>
                        <CocommentIcon>
                            <Icon name="chatbox-ellipses-sharp" size = {20} color = '#808080'/>
                        </CocommentIcon>
                        <CommentGoodIcon>
                            <Icon name="thumbs-up-sharp" size = {18} color = '#808080'/>
                        </CommentGoodIcon>
                        <CommentPlusIcon>
                            <Icon name="ellipsis-vertical-outline" size = {15}/>
                        </CommentPlusIcon>
                    </CommentMenuBox>
                </CommentProfileBox>
                <CommentContent>내용을 입력하세요</CommentContent>
                <DataAndGoodBox>
                    <CommentDate>09/26 16:00</CommentDate>
                    <CommentGood>
                        <Icon name="thumbs-up" size = {10} color = "#FF0000"/>
                    </CommentGood>
                    <CommetGoodCnt>18</CommetGoodCnt>
                </DataAndGoodBox>
            </CommentBox>
            <CommentBox></CommentBox>
            <InputWindow>
                <InputText>입력창</InputText>
                <InputIcon></InputIcon>
            </InputWindow>
        </Container>
    )
}
export default HotBoard_min;