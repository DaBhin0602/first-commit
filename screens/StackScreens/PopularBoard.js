import React, { useState,useEffect } from "react"
import { FlatList, Text, View } from "react-native"
import styled from "styled-components";

// javascript->react
// useState,useEffect
// useState -> 바뀐 변수 값 화면에 바로 새로고침
// useEffect => component가 바뀌면 해당 함수 실행

const FlatScroll = styled.FlatList`
    padding-top: 30px;
`;

const ItemBox = styled.View`
    border:1px;
    width:100%;
    height:100px;
`;

const TouchCategoryView = styled.View`
    width:90%;
    height:50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
    //TouchableOpacity 이제 안씀. Pressable이 최신꺼

    const TouchCategory = styled.Pressable`
        border:1px;
        width:30%;
        height:30px;
        border-radius: 20px;
        background-color: teal;
        align-items: center;
        justify-content: center;
    `;

const trending=[1,2,3,4,5,6,7,8,9,10];
const trending2=[11111,22222,33333,444];
const trending3=[11231231,2,3123414,414314,5,1341346,71231238,9,10];

const PopularBoard = ({navigation:{navigate}})=>{
    //setRefreshing() 함수를 통해 refreshing 변수 값 변경 , false는 초기 값
    const [refreshing,setRefreshing] = useState(false);
    const [screenNumber,setScreenNumber] = useState(1);
    const [effectTest,setEffectText] = useState(false);

    //async,await : await 가끝날때까지 모두대기
    const onfresh= async ()=>{
        setRefreshing(true);
        //await data 새로고침
        setRefreshing(false);
    }

    //상위 함수에서 실행
    useEffect(()=>{
        console.log("useEffect실행");
    },[effectTest]);

    return(
        <FlatScroll
            data={screenNumber==1 ? trending : screenNumber==2 ? trending2 :trending3}

            onRefresh={onfresh}
            refreshing={refreshing}
            
            ListHeaderComponent={
                <TouchCategoryView>
                    <TouchCategory onPress={()=>setEffectText(!effectTest)}>
                        <Text>1</Text>
                    </TouchCategory>
                    <TouchCategory onPress={()=>setScreenNumber(2)}>
                        <Text>2</Text>
                    </TouchCategory>
                    <TouchCategory onPress={()=>setScreenNumber(3)}>
                        <Text>3</Text>
                    </TouchCategory>
                </TouchCategoryView>
            }
            keyExtractor={(item)=>item+""}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=><View style={{height:30}}></View>}
            renderItem={({item})=>(
                <ItemBox>
                    <Text>{item}</Text>
                </ItemBox>
            )}
        />
    )
}

export default PopularBoard