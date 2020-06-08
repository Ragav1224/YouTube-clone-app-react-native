import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View,Image,Dimensions,TextInput,FlatList,ActivityIndicator } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import MiniCard from '../Components/MiniCard'
import { ScrollView } from 'react-native-gesture-handler';
import  Constant  from 'expo-constants';
import {useSelector,useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key={Your api key}

const Search = ({navigation})=>{

    const {colors} = useTheme()


    const [value,setValue] = useState('')
    // const [miniCardData, setMiniCard] = useState([])
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()

    const miniCardData = useSelector(state=>{
        return state.cardData
    })

    const fetchData =() =>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyD0XsoAVt7b7bmc1879S2qfpx2lCvgXZ60`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            // setMiniCard(data.items)
            dispatch({type:'add',payload:data.items})
        })
    }

    return(
        <View style={{flex:1,
            marginTop:Constant.statusBarHeight,
        }}>

{/* --------------------- Search bar ---------------------------------*/}
            
            <View 
                style={{
                    flexDirection:'row', 
                    margin:5,
                    justifyContent:'space-around',
                    height:35,
                    backgroundColor:colors.headerColor,
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
                }}>
                    {/* Back button */}
                <MaterialIcons 
                name="arrow-back" 
                size={30} 
                color="black" 
                style={{color:colors.iconColor}}
                onPress={()=>navigation.goBack()}
                />  

                   {/*Search input  */}
                <TextInput 
                style={{
                    width:"75%",
                    backgroundColor:"#e6e6e6"
                }}
                value={value}
                onChangeText={(text)=>setValue(text)}

                />

                {/* Send Button */}

                <MaterialIcons 
                name="send" 
                size={30} 
                color="black"
                style={{color:colors.iconColor}}
                onPress={()=>fetchData()}
                />
            </View>

            {loading?<ActivityIndicator style={{marginTop:10}} size='large' color='red'/> :null}

            <FlatList
                data={miniCardData}

                renderItem={({item})=>{
                    return(
                        <MiniCard 
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

export default Search;
