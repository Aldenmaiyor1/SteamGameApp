import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { Route } from 'expo-router/build/Route'
import tw from "twrnc"

const List = () => {

  const [listInformation, setListInformation] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [upperPrice, setUpperPrice] = useState(100000)
  const [lowerPrice, setLowerPrice] = useState(0)
  const [title, setTitle] = useState("")
  const [priceDropDown, setPriceDropDown] = useState(false)

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${upperPrice}&lowerPrice=${lowerPrice}&title=${title}`)
      .then((resp) => resp.json())
      .then((json) => setListInformation(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)
      );
  }, [isLoading])

  useEffect(() => {
    console.log(listInformation)
  }, [listInformation])


  return (
    <View styles={tw`bg-sky-900 flex-1`}>
      <View style={tw`flex flex-row justify-around bg-sky-900`}>
        <TextInput
          style={tw`h-[30px] pt-0 px-5 w-4/5 bg-white border`}
          placeholder='Search game'
          onChangeText={newText => setTitle(newText)}
          onSubmitEditing={() => setLoading(true)}
        />

        <TouchableOpacity
          style={tw`w-1/5 bg-sky-500 text-white border justify-center`}
          onPress={() => {
            setPriceDropDown((priceDropDown) => {
              console.log(priceDropDown)
              return !priceDropDown
            })
          }}
        >
          <Text style={tw`self-center text-white`}>Filter</Text>
        </TouchableOpacity>
      </View>

      {priceDropDown ?
        <View style={tw` flex-row self-center gap-[5px]`}>

          <Text>Min Price $</Text>
          <TextInput
            style={tw`border py-0 px-[5px] w-[50px] ml-[10px]`}
            placeholder='Min..'
            onChangeText={(text) => {
              setLowerPrice(text)
            }}
          />
          <Text>Max Price $</Text>
          <TextInput
            style={tw`border py-0 px-[5px] w-[50px] ml-[10px]`}
            placeholder='Max..'
            onChangeText={(text) => {
              setUpperPrice(text)
            }}
          />

        </View>
        :
        null
      }
      <Button
        title='Search'
        onPress={() => {
          console.log()
          setLoading(true)
        }}
      />

      <ScrollView style={tw`flex bg-sky-950 text-white min-h-full`}>
        {isLoading ?
          <View style={tw`flex-1 self-center mt-[250px]`}>
            <Text> Loading...... </Text>
            <ActivityIndicator />
          </View>
          :
          <>
            <Text style={tw`text-white`}>Search resutls for "{title}" bewteen "${lowerPrice}" and "${upperPrice}"</Text>
            {listInformation.length != 0 ?
              (listInformation.map((item) => (
                <TouchableOpacity onPress={() => {
                  router.push(`../${item.gameID}`)
                }}
                  key={item.steamAppID}
                  style={tw`mt-10`}
                >
                  <View style={tw`flex-row mt-[-5px] h-auto justify-between`}>
                    <Text style={tw`w-62 text-white text-5`}>{item.title}</Text>
                    <Image
                      source={{ uri: (item.thumb) }}
                      style={tw`h-15 w-40`}
                    />
                  </View>
                  <View style={tw`flex-row gap-6 mt-[-10px] bg-sky-950 w-18%`}>
                    <Text style={tw`text-white text-decoration-line: line-through`}>
                      ${item.normalPrice}nzd
                    </Text>

                  </View>
                  <View style={tw`flex-row gap-3  bg-sky-700 w-18%`}>
                    <Text style={tw`text-white self-center`}>
                      ${item.salePrice}nzd
                    </Text>
                    <View style={tw`bg-lime-500 `}>
                      <Text>
                        {Number((1 - (item.salePrice / item.normalPrice)) * 100).toFixed(0)}%
                      </Text>
                    </View>
                  </View>

                </TouchableOpacity>

              )))
              :
              <Text
                style={tw`flex-1 mt-[250px] self-center`}
              >There are no games with the title "{title}"</Text>
            }
          </>
        }
      </ScrollView>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  header: {
    border: "1px solid black",
  }
})
