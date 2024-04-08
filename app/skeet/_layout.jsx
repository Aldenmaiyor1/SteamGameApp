import {Stack, Tabs} from "expo-router"
import { Image } from "react-native"
import SteamIcon from "../../assets/SteamIcon.jpg"
import SteamIconBackgroundless from "../../assets/steam-icon-backgroundless.jpg"
import SteamIconSq from "../../assets/SteamIconSq.jpg"
import Pepe from "../../assets/Clown-pepe.gif"

const RootLayout = () =>{
    return(
        <Tabs screenOptions={{
            tabBarInactiveTintColor:"white",
            tabBarActiveTintColor: "white",
            tabBarStyle: {
                backgroundColor: "#3E567C",
                borderTopWidth: 0,
                
            }
        }}>
            <Tabs.Screen 
                name="List"
                options={{
                    tabBarActiveBackgroundColor: "grey",
                    headerStyle: {
                        backgroundColor: "#3E567C",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white", 
                    tabBarIcon: ()=>{
                        return (
                            <Image
                                style = {{width:38, height: 35}}
                                source={SteamIconBackgroundless}
                                backgroundColor = "grey"
                            />
                        )
                    }
                }}
            />

            <Tabs.Screen 
                name="Meme"
                options={{
                    headerStyle: {
                        backgroundColor: "#3E567C",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    tabBarActiveBackgroundColor:"grey",
                    tabBarIcon: ()=>{
                        return (
                            <Image
                                style = {{width:38, height: 35}}
                                source={Pepe}
                            />
                        )
                    }
                }}
            />
            
        </Tabs>
    )
}

export default RootLayout