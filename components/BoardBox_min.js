import react from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const BoardBox = styled.View`
    //border: 1px;
    border-radius: 15px;
    width: 92%;
    align-self: center;
    margin-bottom: 10px;
`;
    const Article = styled.TouchableOpacity`
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
            const Image = styled.Image`
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

const BoardBox_min = () => {
    return(
        <BoardBox>
            <Article>
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
                    <Image></Image>
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
            </Article>
        </BoardBox>
    )
}

export default BoardBox_min;