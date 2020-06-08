import React from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';

const MiniCard = (props) =>{
    const navigation = useNavigation();
    const {colors} = useTheme()
    const textColor = colors.iconColor
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title})
        }}
        >
        
        <View style={{flexDirection:'row', margin:10, marginBottom:0}}>
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}

            style={{
                width:"45%",
                height:100
            }}
            />

            <View style={{marginLeft:8}}>
                <Text
                    style={{fontSize:18, 
                    width: Dimensions.get('screen').width/2,
                    color:textColor
                    }}
                    ellipsizeMode='tail'
                    numberOfLines={3}
                    >
                        {props.title}
                </Text>
                <Text
                    style={{fontSize:12, color:textColor}}
                    >
                        {props.channel}
                </Text>
                
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MiniCard;