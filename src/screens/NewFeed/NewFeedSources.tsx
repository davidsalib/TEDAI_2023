import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";
import CheckboxRow from "@shared-components/CheckboxRow";

type Source = {
  source: string;
  platform: string;
  image: string;
};

const sources: Source[] = [
  {
    source: "TED",
    platform: "YouTube",
    image:
      "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ted-512.png",
  },
  // generate a list with 10 youtube channels and podcasts that have educational content similar to TED but not TED
  {
    source: "Khan Academy",
    platform: "YouTube",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Khan_Academy_Logo_Old_version_2015.jpg",
  },
  {
    source: "Crash Course",
    platform: "YouTube",
    image:
      "https://yt3.googleusercontent.com/ytc/APkrFKZIsMiNGbf_0cN4j4Z-P17G0xMMhmeYGR5LLKW3Fw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    source: "Planet Money",
    platform: "Podcast",
    image:
      "https://fish.uw.edu/wp-content/uploads/sites/29/2021/03/NPR_Planet_Money_cover_art.jpeg",
  },
  {
    source: "The School of Life",
    platform: "YouTube",
    image:
      "data:image/png;base64,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",
  },
];

const NewFeedSources: React.FC = () => {
  const [selectedSources, setSelectedSources] = React.useState([
    sources[0].source,
  ]);

  const onPressCheckbox = (source: Source) => {
    if (selectedSources && selectedSources.indexOf(source.source) > -1) {
      setSelectedSources(
        selectedSources.filter((item) => item !== source.source),
      );
    } else {
      setSelectedSources([...selectedSources, source.source]);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <NewFeedHeader
        onBack={NavigationService.goBack}
        title="Which sources would you like incorporate?"
      />
      <View className="px-6 py-4 flex-col justify-between grow ">
        {/* <Text className="text-3xl leading-loose font-semibold text-black">
          Which sources would you like incorporate?
        </Text> */}
        <ScrollView className="flex-1">
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#a3a3a3"
            className="border-b border-neutral-200"
          />
          {sources.map((source) => (
            <CheckboxRow
              key={source.source}
              imageURL={source.image}
              title={source.source}
              subtitle={source.platform}
              onPress={() => onPressCheckbox(source)}
              isSelected={selectedSources.indexOf(source.source) > -1}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          className="bg-black rounded-md py-4 flex-row justify-center items-center"
          onPress={() => NavigationService.navigate(SCREENS.NEWFEED_VOICE)}
        >
          <Text className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewFeedSources;
