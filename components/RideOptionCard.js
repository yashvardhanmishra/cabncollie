import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSclices";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const TravelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex-none`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 rounded-full z-10`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-2 text-xl`}>
          Select a ride -{TravelTimeInformation?.distance.text}
        </Text>
      </View>

      <View style={tw`flex-1 justify-evenly`}>
        {data.map(({ id, image, title, multiplier }) => (
          <TouchableOpacity
            key={id}
            onPress={() => setSelected({ id, title })}
            style={[
              tw`flex-row justify-between items-center px-5 py-2`,
              id === selected?.id && tw`bg-gray-200`,
            ]}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`flex-1 ml-3`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{TravelTimeInformation?.duration.text}Travel time...</Text>
            </View>
            <Text style={tw`text-lg`}>₹99</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={tw`py-3 px-3`}>
        <TouchableOpacity
          disabled={!selected}
          style={[tw`bg-black py-3 rounded`, !selected && tw`bg-gray-300`]}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
