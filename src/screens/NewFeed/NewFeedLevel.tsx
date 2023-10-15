import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";

const levels = [
  {
    title: "Nothing",
    value: "nothing",
  },
  {
    title: "A little",
    value: "a_little",
  },
  {
    title: "A lot",
    value: "a_lot",
  },
];

const NewFeedLevel: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = React.useState(levels[0].value);

  return (
    <SafeAreaView>
      <NewFeedHeader
        onBack={NavigationService.goBack}
        title="How much do you know about this topic?"
      />
      <View className="px-6 py-2 gap-12">
        <View className="flex-col gap-y-4 p-0 m-0">
          {/* <Text className="text-3xl leading-loose font-semibold text-black">
            How much do you know about this topic?
          </Text> */}
          <View>
            {levels.map((level) => (
              <RadioRow
                key={level.value}
                title={level.title}
                onPress={() => setSelectedLevel(level.value)}
                isSelected={selectedLevel === level.value}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity
          className="bg-black rounded-md py-4 flex-row justify-center items-center"
          onPress={() => NavigationService.navigate(SCREENS.NEWFEED_SOURCES)}
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

export default NewFeedLevel;
