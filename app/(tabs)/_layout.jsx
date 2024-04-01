import { Stack, Tabs } from 'expo-router'
import React from 'react'
import SteamIcon from "../../assets/SteamIcon.jpg"
import { Image } from 'react-native'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index'/>
        <Tabs.Screen name="GamesList/List" options={{
            title:"games",
            tabBarIcon: ()=>{
                return (
                    <Image
                        style = {{width:20, height: 20}}
                        source={SteamIcon}
                    />
                )
            }
        }}/>
    </Tabs>
  )
}

export default _layout
