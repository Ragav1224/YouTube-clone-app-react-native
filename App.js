import React from 'react';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';


import Home from './src/Screens/Home'
import { themeReducer } from './src/reducer/themeReducer'

import Suscribe from './src/Screens/Suscribe'
import Explore from './src/Screens/Explore'
import Search from './src/Screens/Search';
import VideoPlayer from './src/Screens/VideoPlayer';

import {Provider,useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {reducer,} from './src/reducer/reducer'



const rootReducer = combineReducers({
  cardData:reducer, //[]
  myDarkMode: themeReducer //false
})

const store = createStore(rootReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:'white',
    tabIcon:'white'
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:'black',
    tabIcon:'red'
  }
}

const RootHome = () =>{

  const {colors} = useTheme()
  
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if (route.name === 'suscribe') {
          iconName = 'subscriptions';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='suscribe' component={Suscribe} />
    </Tabs.Navigator>
  )
}

export default ()=>{
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state.myDarkMode
  })

  return (
    <Provider store={store}>
      <NavigationContainer theme={currentTheme? customDarkTheme: customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name='rootHome' component ={RootHome} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name = "VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
