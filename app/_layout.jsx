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
                    headerShown: false,
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