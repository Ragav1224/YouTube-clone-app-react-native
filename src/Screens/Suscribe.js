import React from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import  Constant  from 'expo-constants';
import Header from '../Components/Header';

const Suscribe = () =>{
    return(
        <View style={{flex:1,
            // marginTop:Constant.statusBarHeight,
        }}>
            <Header />
            <Text>
                Suscribe
            </Text>
        </View>
    )
}

export default Suscribe