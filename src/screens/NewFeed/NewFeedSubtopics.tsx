import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";
import CheckboxRow from "@shared-components/CheckboxRow";
import MockData from "@screens/home/mock/MockData";
const subtopics = [
  // generate subtopics on the topic of leadership
  "Team Management",
  "Strategy",
  "Communication",
  "Decision Making",
  "Motivation",
  "Conflict Resolution",
  "Delegation",
  "Goal Setting",
  "Innovation",
  "Leadership Styles",
  "Leadership Skills",
  "Leadership Theories",
  "Leadership Traits",
  "Leadership Qualities",
  "Leadership vs Management",
];

const NewFeedSubtopic: React.FC = () => {
  const [selectedSubtopics, setSelectedSubtopics] = React.useState(subtopics);

  const onPressCheckbox = (subtopic: string) => {
    if (selectedSubtopics && selectedSubtopics.indexOf(subtopic) > -1) {
      setSelectedSubtopics(
        selectedSubtopics.filter((item) => item !== subtopic),
      );
    } else {
      setSelectedSubtopics([...selectedSubtopics, subtopic]);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <NewFeedHeader
        onBack={NavigationService.goBack}
        title="What subtopics are you interested in?"
      />
      <View className="px-6 py-4 flex-col justify-between grow ">
        {/* <Text className="text-3xl leading-loose font-semibold text-black">
          What subtopics are you interested in?
        </Text> */}
        <ScrollView className="flex-1">
          {subtopics.map((subtopic) => (
            <CheckboxRow
              key={subtopic}
              title={subtopic}
              onPress={() => onPressCheckbox(subtopic)}
              isSelected={selectedSubtopics.indexOf(subtopic) > -1}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          className="bg-black rounded-md py-4 flex-row justify-center items-center"
          onPress={() =>
            NavigationService.navigate(SCREENS.FEED_STACK, {
              screen: SCREENS.FEED_DETAILS,
              params: MockData[0],
            })
          }
        >
          <Text className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewFeedSubtopic;
