import {Stack} from "expo-router"
import tw from "twrnc"

const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen 
                name="index"
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="skeet"
                options={{
                    headerShown: true,
                    headerTitle: "Back",
                    headerStyle: {
                        backgroundColor: "#3E567C",
                    },
                    headerTintColor: "white",
                    headerTitleAlign:"left",
                }}
            />

            <Stack.Screen 
                name="[id]"
                options={{
                    headerTitle: "Information",
                    headerStyle: {
                        backgroundColor: "#3E567C",
                    },
                    headerTintColor: "white",
                    headerTitleAlign:"center",
                    
                }}
            />
        </Stack>
    )
}

export default RootLayout