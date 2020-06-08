import React from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions,FlatList } from 'react-native';
import  Constant  from 'expo-constants';
import Header from '../Components/Header';
import Card from '../Components/Card';
import {useSelector} from 'react-redux'

const LittleCard = ({name}) =>{
    return(
        <View style={{
            backgroundColor:'red',
            height:50,
            width:'40%',
            borderRadius:4,
            margin:7,
            marginBottom:0
        }}
        >
            <Text style={{
                textAlign:'center',
                marginTop:10,
                fontSize:22,
                color:'white'
            }}
            >
                {name}
            </Text>
        </View>
    )
}


const Explore = () =>{

    const cardData = useSelector(state =>{
        return state.cardData
      })
    return(
        <View style={{flex:1,
            // marginTop:Constant.statusBarHeight,
        }}>
            <Header />
            <View style={{flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around'
            }}>
                <LittleCard name='Trending'/>
                <LittleCard name='Gaming'/>
                <LittleCard name='Music'/>
                <LittleCard name='Movies'/>
                <LittleCard name='News'/>
                <LittleCard name='Fasion'/>
            </View>

            <Text style={{
                fontSize: 20,
                margin:5,
                borderBottomWidth:5,
                backgroundColor:'white',
                textAlign:'center',
                //for andriod
                elevation:4,
                // for ios
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            }}>
                Trending Videos
            </Text>

            <FlatList 
                data = {cardData}
                renderItem={({item})=>{
                    return(
                    <Card 
                        videoId = {item.id.videoId}
                        title = {item.snippet.title}
                        channel = {item.snippet.channelTitle}

                    />
                    )
                }}

                keyExtractor={item=>item.id.videoId}

                
            />
            
        </View>
    )
}

export default Explore