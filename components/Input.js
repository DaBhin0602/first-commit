import react from "react";
import styled from "styled-components/native";

const Box = styled.View`
    width:310px;
    margin-bottom: ${(props)=>props.mbottom}px;
`;
    const Text = styled.Text`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
    `;
    const TextInput = styled.TextInput`
        width:100%;
        height:40px;
        padding-left:10px;
        border-radius: 10px;
        background-color: #E3E3E3;
    `;


const Input = ({title,changeText,mbottom})=>(
    <Box mbottom={mbottom}>
        <Text>{title}</Text>
        <TextInput 
            placeholder={`${title}을 입력하세요`}
            onChangeText={(text)=>changeText(text)}
        />
    </Box>
)

export default Input;