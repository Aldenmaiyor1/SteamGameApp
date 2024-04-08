import { Dimensions, FlatList, Image, ScrollView, Text, View, Linking, TouchableOpacity} from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react";
import tw from "twrnc"
import Swiper from "react-native-swiper";
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from "react-native-safe-area-context";

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
            // console.log(steamInfo[key].data.screenshots)
            // console.log(steamInfo.steamInfo[key].data.screenshots)
            // console.log(steamInfo[key].data)
            setScreenshots(steamInfo[key].data.screenshots)
            setAboutTheGame(steamInfo[key].data)
            console.log(steamInfo[key])
        }
    }, [steamInfo])

    useEffect(() => {

        if (aboutTheGame) {
            console.log(aboutTheGame)
        }
    }, [aboutTheGame])

    const renderItem = ({ item }) => {
        return (
            <View key={item.path_full} style={tw`h-60 w-100`}>
                <Image source={{ uri: item.path_full }} style={tw`h-50 w-100`} />
            </View>
        );
    };

    const openMetacritic = () =>{
        const url = aboutTheGame?.metacritic?.url;
        Linking.openURL(url)
    }

    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={tw`flex-1 bg-sky-900 h-100 mt-0`}>
            <SafeAreaView style={tw`mt-0`}>
                <Text style={tw`text-white text-7`}>
                    {gameInformation?.info?.title}
                </Text>
            </SafeAreaView>
            {/* <View>
             <Text>hihi</Text>
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


        <View style={tw`w-[${screenWidth}dp]`}>
            <Text>hihi</Text>
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
        </View> */}

            <View style={tw`justify-center w-100`}>
                <Carousel
                    data={screenshots}
                    renderItem={renderItem}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                    layout={'default'}
                />
            </View>
            <Text style={tw`text-white text-5 ml-5`}>About</Text>
            <View style={tw`bg-sky-700 mx-5 p-2 rounded-lg`}>
                <Text style={tw`text-white `}>{aboutTheGame?.short_description}</Text>
            </View>

            <Text style={tw`text-white text-5 ml-5`}>Metacritic Score (click to open metacritic)</Text>
            <TouchableOpacity 
                onPress={()=>{
                    openMetacritic()
                }}
                style={tw`bg-sky-700 mx-5 p-2 rounded-lg`}>
                <Text style={tw`text-white `}>{aboutTheGame?.metacritic?.score}/100</Text>
                <Text style={tw`text-white `}>{aboutTheGame?.metacritic?.url}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default id