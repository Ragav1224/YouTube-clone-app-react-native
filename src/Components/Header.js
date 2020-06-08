import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome,MaterialIcons } from '@expo/vector-icons';
import  Constant  from 'expo-constants';
import { useNavigation, useTheme } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'


export default function Header(){

    const navigation = useNavigation();
    const {colors} = useTheme()

    const dispatch = useDispatch()
    const currentTheme = useSelector(state=>{
        return state.myDarkMode
    })
 

    const styles = StyleSheet.create({
        headerStyle:{
            height:45,
            backgroundColor:colors.headerColor,
            // using constant for get the dtatus bar little down
            marginTop:Constant.statusBarHeight,
            flexDirection:'row',
            justifyContent:'space-between',

            // //for header animation
            // position:'absolute',
            // top:0,
            // left:0,
            // right:0,


    // Elevation for Android (Box Shadow)        
            elevation:4,
    // Elevation for ios (Box Shadow)
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
        },
        headeText:{
            fontSize:22,
            fontWeight:"bold",
            marginLeft:5,
            marginTop:4,
            color:colors.iconColor
        },
        youTubeView:{
            flexDirection:'row',
            margin:5
        },
        header3Icons:{
            flexDirection:'row',
            margin:5,
            justifyContent:'space-around',
            width:175,
        }
    })

  return (
    <View style={styles.headerStyle}>

        {/* View for youtube icon and text */}

        <View style={styles.youTubeView}>
             <Entypo 
             name="youtube" 
             style={{
                 marginLeft:5
             }}
             size={35} 
             color="red" />
             <Text style={styles.headeText}>
                 YouTube
             </Text>
        </View>

        {/* View for other icons */}

        <View style={styles.header3Icons}>
              <MaterialCommunityIcons name="video-plus" size={35} color={colors.iconColor} />
              <FontAwesome 
              style={{marginTop:5}}
              name="search" size={23} color={colors.iconColor}
              onPress={()=>navigation.navigate("Search")}
              />
              <MaterialCommunityIcons 
              style={{marginTop:5}}
              name="account-circle" size={28} color={colors.iconColor} 
              onPress={()=>dispatch({type:"change_theme", payload:!currentTheme})}
              />
              
        </View>
    </View>
  );
}


