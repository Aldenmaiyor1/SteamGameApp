import { Link, router } from 'expo-router'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import CodingPepe from "../assets/Coding-pepe.gif"
import tw from "twrnc"
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs(true)

const index = () => {
    return (
        <View style={tw`flex-1 bg-sky-950`}>
            <View style={tw`flex my-50`}>
                <Text style={tw`text-white px-5 text-5`}> Welcome to</Text>
                <Text style={tw`text-white px-5 text-14`}>SteamSaver</Text>
                <Text style={tw`text-white px-5`}>SteamSaver is an app that helps you find deals for your favourite games on steam, it also generates memes for some reason :D</Text>

            </View>
            <Image
                source={CodingPepe}
                style={tw`h-70 w-70 self-center mt-[-180px] mb-[20px]`}
            />
            <View style={tw`self-center flex gap-6 w-48 `}>
                <Button
                    onPress={() => router.push("skeet/List")}
                    title="click here to find games"
                    >
                </Button>
                <Button
                    onPress={() => router.push("skeet/Meme")}
                    title="click here for some memes!"
                    >
                </Button>
                <Button
                    onPress={()=> router.push("_sitemap")}
                    title='site map'
                    >
                </Button>
            </View>
        </View>
    )
}

export default index