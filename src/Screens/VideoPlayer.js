import React from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import  Constant  from 'expo-constants';
import { WebView } from 'react-native-webview';
import { useNavigation , useTheme} from '@react-navigation/native';

const VideoPlayer = ({route}) =>{
    const {colors} = useTheme()
    const textColor = colors.iconColor

    const {videoId,title} = route.params

    return(
        <View style={{flex:1,
            marginTop:Constant.statusBarHeight,
        }}>
            <View style={{
                width:"100%",
                height:200
            }}
            >
                <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                    style={{ marginTop: 20 }}
                />
            </View>
            

            <Text style={{
                fontSize:20,
                margin:9,
                width: Dimensions.get('screen').width-50,
                color:textColor
            }}
            numberOfLines={2}
            ellipsizeMode='tail'

            
            >
                {title}
            </Text>
        </View>
    )
}

export default VideoPlayer