import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Image, Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";

const voices = [
  {
    name: "Lex Friedman",
    value: "lex_friedman",
    image:
      "https://pbs.twimg.com/profile_images/956331551435960322/OaqR8pAB_400x400.jpg",
  },
  {
    name: "Joe Rogan",
    value: "joe_rogan",
    image:
      "https://static.independent.co.uk/2022/10/12/15/Screen%20Shot%202022-10-12%20at%209.29.19%20AM.png?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp",
  },
  {
    name: "Taylor Swift",
    value: "taylor_swift",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/taylor-swift-attends-in-conversation-with-taylor-swift-news-photo-1673399306.jpg?crop=1.00xw:0.669xh;0,0.0772xh&resize=640:*",
  },
  {
    name: "Elon Musk",
    value: "elon_musk",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
  },
  {
    name: "Betty White",
    value: "betty_white",
    image:
      "https://d3hjzzsa8cr26l.cloudfront.net/b473a4bc-2b91-11e8-b1aa-c5c2b7095a19.jpg?pw=140",
  },
  {
    name: "Arnold",
    value: "arnold_schwarzenegger",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
  },
];

const NewFeedVoice: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = React.useState(voices[0].value);

  return (
    <SafeAreaView>
      <NewFeedHeader
        onBack={NavigationService.goBack}
        title="Who would you like to host this feed?"
      />
      <View className="px-6 py-4 flex-col">
        {/* <Text className="text-3xl leading-loose font-semibold text-black">
          Who would you like to host this feed?
        </Text> */}
        <View className="flex-row flex-wrap justify-between gap-y-0 mb-8 mt-4">
          {voices.map((voice) => (
            <TouchableOpacity
              key={voice.value}
              className="items-center gap-y-4"
              onPress={() => setSelectedVoice(voice.value)}
            >
              <View
                className={`rounded-full border-4 ${
                  selectedVoice === voice.value
                    ? "border-neutral-900"
                    : "border-transparent opacity-50"
                }`}
              >
                <Image
                  source={{ uri: voice.image }}
                  className={"w-24 h-24 rounded-full"}
                />
              </View>
              <Text
                className={`font-semibold ${
                  selectedVoice === voice.value
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                {voice.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          className="bg-black rounded-md py-4 flex-row justify-center items-center"
          onPress={() => NavigationService.navigate(SCREENS.NEWFEED_SUBTOPIC)}
        >
          <Text className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewFeedVoice;
