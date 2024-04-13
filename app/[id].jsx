import { Dimensions, FlatList, Image, ScrollView, Text, View, Linking, TouchableOpacity } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react";
import tw from "twrnc"


const id = () => {

    const id = useLocalSearchParams();

    const [gameInformation, setGameInformation] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [steamAppID, setSteamAppID] = useState(null)
    const [steamInfo, setSteamInfo] = useState(null)
    const [aboutTheGame, setAboutTheGame] = useState(null)
    const [screenshots, setScreenshots] = useState(null)


    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${id.id}`)
            .then((resp) => resp.json())
            .then((json) => setGameInformation(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)
            );
    }, [])

    useEffect(() => {
        if (gameInformation?.info?.steamAppID) {
            setSteamAppID(gameInformation.info.steamAppID);
        }
    }, [gameInformation]);

    useEffect(() => {
        fetch(`https://store.steampowered.com/api/appdetails?appids=${steamAppID}`)
            .then((resp) => resp.json())
            .then((json) => setSteamInfo(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)
            );
    }, [steamAppID])

    useEffect(() => {
        if (steamInfo) {
            let key;
            for (const k in steamInfo) {
                key = k
            }
            setScreenshots(steamInfo[key].data.screenshots)
            setAboutTheGame(steamInfo[key].data)
        }
    }, [steamInfo])

    useEffect(() => {

        if (aboutTheGame) {
            console.log(aboutTheGame)
        }
    }, [aboutTheGame])

    const renderItem = ({ item }) => {
        return (
            <View key={item.path_full} style={tw`h-60 w-100 self-center mr-[12px]`}>
                <Image source={{ uri: item.path_full }} style={tw`h-50 w-100`} />
            </View>
        );
    };

    const openMetacritic = () => {
        const url = aboutTheGame?.metacritic?.url;
        Linking.openURL(url)
    }

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={tw`flex-1 bg-sky-900 h-100 mt-0`}>
            <View style={tw`mt-0`}>
                <Text style={tw`text-white text-7`}>
                    {gameInformation?.info?.title}
                </Text>
            </View>

            {/* Scroll View, Not very performant */}
            {/* <View>
                <ScrollView horizontal={true}>
                    {screenshots ?

                        (screenshots.map((item) => (
                            <Image
                                source={{ uri: (item.path_full) }}
                                style={tw`h-50 w-100 flex-1 self-center`}
                            />
                        )))

                        :
                        <Text>nothing</Text>}
                </ScrollView>
            </View>

 */}

            {/* FlatList, better performance, allows defining of a snapping function */}
            <View style={tw`w-[${screenWidth}dp]`}>
            {screenshots ? (
                <FlatList
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={true}
                    data={screenshots}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.path_full}
                    snapToInterval={screenWidth}  
                    snapToAlignment={'center'}   
                />
            ) : (
                <Text>No screenshots found</Text>
            )}
        </View> 

            <Text style={tw`text-white text-5 ml-5`}>About</Text>
            <View style={tw`bg-sky-700 mx-5 p-2 rounded-lg`}>
                <Text style={tw`text-white `}>{aboutTheGame?.short_description}</Text>
            </View>

            <Text style={tw`text-white text-5 ml-5`}>Metacritic Score (click to open metacritic)</Text>
            <TouchableOpacity
                onPress={() => {
                    openMetacritic()
                }}
                style={tw`bg-sky-700 mx-5 p-2 rounded-lg`}>
                <Text style={tw`text-white `}>{aboutTheGame?.metacritic?.score}/100</Text>
                <Text style={tw`text-white `}>{aboutTheGame?.metacritic?.url}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default id