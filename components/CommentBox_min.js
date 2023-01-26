import react from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const CommentBox = styled.View`
    border-radius: 10px;
    background-color: #E3E3E3;
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
            background-color: #BBBBBB;
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

const CommentBox_min = () => {
    return(
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
                            <Icon name="ellipsis-vertical-outline" size = {15} color = '#808080'/>
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
    )
}

export default CommentBox_min;