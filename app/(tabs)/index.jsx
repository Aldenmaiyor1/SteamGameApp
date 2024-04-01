import { Link, router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const index = () => {
    return (
        <View>
            <Text> Home Page</Text>
            <Link href="GamesList/List"> Go find some games</Link>
            <Button 
                onPress={() => router.push("GamesList/List")}
                title="click here to find games">
            </Button>
        </View>
    )
}

export default index