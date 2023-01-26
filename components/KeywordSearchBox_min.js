import react from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from "react-native";

//-----------------------------------------------------------------------------
//-----------------------------키워드 검색하는 부분------------------------------
//-----------------------------------------------------------------------------
const SearchFilterBox = styled.View`
//border : 1px;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
height : 40px;
flex-direction : row;
`;   
const FilterBox = styled.View`
    height : 20px;
    flex-direction:row;
    width: 70%;
    margin-top: 10px;
`;
    const Filter1 = styled.View`
        border: 1px;
        border-color: #1398FF;
        border-radius: 5px;
        flex-direction: row;
        justify-content: center;
        padding-right: 5px;
        padding-left: 5px;
        margin-right: 5px;
    `;
        const Filter1Text = styled.Text`
            font-size: 14px;
            color: #0062FF;
            margin-right: 5px;
        `;
        const TextX1 = styled.Text`
            font-size: 14px;
            font-weight: 600;
            color: #1398FF;
        `;
    const Filter2 = styled.View`
        border: 1px;
        border-color: #FFAB40;
        border-radius: 5px;
        flex-direction: row;
        justify-content: center;
        padding-left : 5px;
        padding-right: 5px;
    `;
        const Filter2Text = styled.Text`
            font-size: 14px;
            color: #FFAB40;
            margin-right: 5px;
        `;
        const TextX2 = styled.Text`
            color : #FFAB40;
            font-size: 14px;
            margin-right: 3px;
            font-weight: 600;
        `;
const SearchFilterBtn = styled.View`
    width: 30%;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
`;
    const SearchFilterIcon = styled.View`
        //border : 1px;
        flex-direction: row;
        margin: 8px;
        justify-content: space-between;
    `;
    const SearchFilterText = styled.Text`
        font-size: 14px;
        color: white;
        align-self: center;
        font-weight: 400;
    `;

const KeywordSearchBox_min = () => {
    return(
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
                <View style = {{
                    flexDirection : "row"
                }}>
                    <LinearGradient style={{
                        width : 100,
                        height: 40,
                        borderRadius: 10,
                        backgroundColor:'#0062FF'
                    }}
                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                        start={{x:1,y:0}} end={{x:0,y:0}}
                    >
                    <SearchFilterIcon>
                        <Icon name="settings" size={25} color = 'white'/>
                        <SearchFilterText>검색필터</SearchFilterText>
                    </SearchFilterIcon>
                    
                    </LinearGradient>
                </View>
            </SearchFilterBtn>
        </SearchFilterBox>
    )
}

export default KeywordSearchBox_min;