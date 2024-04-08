import {Stack, Tabs} from "expo-router"
import { Image } from "react-native"
import SteamIcon from "../../assets/SteamIcon.jpg"
import Pepe from "../../assets/Clown-pepe.gif"

const RootLayout = () =>{
    return(
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: "#000"
            }
        }}>
            <Tabs.Screen 
                name="List"
                options={{
                    headerStyle: {
                        backgroundColor: "#3E567C",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white", 
                    tabBarIcon: ()=>{
                        return (
                            <Image
                                style = {{width:20, height: 20}}
                                source={SteamIcon}
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
                    tabBarActiveBackgroundColor:"black",
                    tabBarIcon: ()=>{
                        return (
                            <Image
                                style = {{width:40, height: 38, }}
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