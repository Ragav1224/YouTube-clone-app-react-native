import React from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation , useTheme} from '@react-navigation/native';

const Card = (props)=>{

    const {colors} = useTheme()
    const textColor = colors.iconColor

    const navigation = useNavigation();

    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title})
        }}
        
        >
        <View style={{marginBottom:10}}>
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                width:"100%",
                height:200
            }}
            />

            <View style={{flexDirection:'row' , margin:5}}>
                <MaterialCommunityIcons name="account-circle" size={40} color="#212121" />
                <View style={{marginLeft:5}}>
                    <Text
                    style={{fontSize:18, 
                    width: Dimensions.get('screen').width-50,
                    color:textColor
                    }}
                    ellipsizeMode='tail'
                    numberOfLines={2}
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
        </View>
        </TouchableOpacity>
    )
}

export default Card