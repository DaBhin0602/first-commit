import react from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const PopularBox = styled.View`
width:310px;
height:100px;
border-radius: 10px;
margin-bottom:10px;
padding-left:15px;
padding-right:15px;
flex-direction:row;
background-color: #E3E3E3;
`;
const PopularBoxLeft = styled.View`
    width:223px;
    height:100px;
    justify-content: center;
`;
    const PopularBoxTitle = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #1D1D1D;
    `;
    const PopularBoxContent = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #1D1D1D;
    `;
    const PopularBoxKeywordBox = styled.View`
        width:100%;
        height:15px;
        flex-direction: row;
    `;
        const PopularBoxKeyword = styled.Text`
            font-weight: 600;
            font-size: 8px;
            color:#FFFFFF;
            text-justify: center;
            text-align:center;
        `;
const PopularBoxRight = styled.View`    
    width:72px;
    height:100px;
    align-items: center;
    justify-content: center;
`;
    const PopularBoxImage = styled.Image`
        border-radius:5px;
        width:50px;
        height:50px;
        background: #BBBBBB;
    `;
        const PopularBoxComment = styled.Text`
            width:100%;
            height:12px;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            text-align: center;
        `;


const BoardBox = () => {
    const navigation = useNavigation();
    return(
        <PopularBox>
                    <PopularBoxLeft>
                        <PopularBoxTitle>질문글 또는 가벼운 글</PopularBoxTitle>
                        <PopularBoxContent>제목을 입력하세요 제목을 입력하세요 제목을 입 력하세요 제목을 입력하세요 제목을 입력하</PopularBoxContent>
                        <PopularBoxKeywordBox>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                        </PopularBoxKeywordBox>
                    </PopularBoxLeft>
                    <PopularBoxRight>
                        <PopularBoxImage></PopularBoxImage>
                        <PopularBoxComment>#18 @18</PopularBoxComment>
                    </PopularBoxRight>
                </PopularBox>
    )
}

export default BoardBox;