import react from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

const Pressable = styled.Pressable`
    width:100%;
    height:40px;
    border-radius: 10px;
    background-color:#545454;
    align-items: center;
    justify-content: center;
    margin-bottom:${(props)=>props.mbottom}px;
`;

const Text = styled.Text`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;


const BlackButton = ({title,mbottom,move}) => {
    const navigation = useNavigation();
    return(
        <Pressable 
            mbottom={mbottom} 
            onPress={()=>navigation.navigate("Stack",{screen:`${move}`})}
        >
            <Text>{title}</Text>
        </Pressable>
    )
}

export default BlackButton;