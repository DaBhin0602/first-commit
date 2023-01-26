import react from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

const Pressable = styled.Pressable`
    width:100%;
    height:40px;
    border-radius: 10px;
    background-color:#0062FF;
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


const BlueButton = ({title,click,mbottom})=>(
    <Pressable 
        onPressOut={()=>click(true)} 
        mbottom={mbottom}
    >
        <LinearGradient style={{
            width:"100%",
            height:"100%",
            borderRadius: 10,
            alignItems:"center",
            justifyContent:"center"
        }}
            colors={['#0062FF', '#0A7DFF', '#1398FF']}
            start={{x:1,y:0}} end={{x:0,y:0}}>
            <Text>{title}</Text>
        </LinearGradient>
    </Pressable>
)

export default BlueButton;