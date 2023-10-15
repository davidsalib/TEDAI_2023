import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";

const languages = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "Korean",
    value: "ko",
  },
  {
    name: "Hindi",
    value: "hi",
  },
  {
    name: "Spanish",
    value: "es",
  },
  {
    name: "French",
    value: "fr",
  },
  {
    name: "German",
    value: "de",
  },
  {
    name: "Italian",
    value: "it",
  },
  {
    name: "Portuguese",
    value: "pt",
  },
  {
    name: "Russian",
    value: "ru",
  },
  {
    name: "Arabic",
    value: "ar",
  },
];

const NewFeedLanguage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = React.useState(languages[0].value);

  return (
    <SafeAreaView className="h-full">
      <NewFeedHeader
        onBack={NavigationService.goBack}
        title="Which language would you like to learn in?"
      />
      <View className="px-6 py-4 flex-1">
        <ScrollView className="flex-1 mb-8">
          {languages.map((language) => (
            <RadioRow
              key={language.value}
              title={language.name}
              onPress={() => setSelectedLevel(language.value)}
              isSelected={selectedLevel === language.value}
            />
          ))}
        </ScrollView>

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

const RadioRow = ({ title, onPress, isSelected }: any) => {
  return (
    <TouchableOpacity
      className="flex-row items-center gap-4 py-4 border-b border-neutral-200"
      onPress={onPress}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 border-neutral-700 ${
          isSelected ? "bg-black" : ""
        }`}
      />
      <Text className="text-black text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default NewFeedLanguage;
