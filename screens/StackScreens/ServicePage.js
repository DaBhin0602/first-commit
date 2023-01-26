import React from "react";
import { Text, View } from "react-native";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;
`;

const HeaderBox = styled.View`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
`;
const TitleText = styled.Text`
            color:red;
            font-size:10px;
        `;
const BackBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const BackText = styled.Text`
            color:red;
            font-size:10px;
        `;
const ConfigureBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const ConfigureText = styled.Text`
            color:red;
            font-size:10px;
        `;


const ServicePage = ()=>(
    <View>
        <Text>ServicePage</Text>
    </View>
)

export default ServicePage;