import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, Image, Text, View } from 'react-native'
import tw from "twrnc"

const index = () => {

    const [meme, setMeme] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://meme-api.com/gimme`)
            .then((resp) => resp.json())
            .then((json) => setMeme(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)
            );
    }, [isLoading])
    return (
        <View style={tw` flex-1 bg-sky-900`}>

            <Text style={tw`text-white text-7`}>A meme a day keeps the doctor away</Text>
            {meme?.nsfw == false ?
                <Image
                    source={{ uri: (meme?.url) }}
                    resizeMode='contain'
                    style={{ width: "90%", aspectRatio: 1 }}
                /> :
                <Text>Meme is not appropriate for university assignment</Text>
            }
            <Button
                title='Get new meme'
                onPress={() =>
                    setLoading(true)}></Button>
        </View>
    )
}

export default index