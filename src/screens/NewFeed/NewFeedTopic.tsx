import React from "react";
import * as NavigationService from "react-navigation-helpers";
import { Text, TextInput, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREENS } from "@shared-constants";
import NewFeedHeader from "./NewFeedHeader";

const NewFeedTopic: React.FC = () => {
  return (
    <SafeAreaView>
      <NewFeedHeader
        title="What would you like to learn about?"
        onBack={() =>
          NavigationService.reset({
            index: 0,
            routes: [{ name: SCREENS.FEED_STACK }],
          })
        }
      />

      <View className="px-6 py-2 gap-32">
        <View className="flex-col gap-y-4 p-0 m-0">
          {/* <Text className="text-3xl leading-loose font-semibold text-black">
            What would you like to learn about?
          </Text> */}
          <TextInput
            placeholder="Topic..."
            placeholderTextColor={"#000"}
            className="border-b border-neutral-200"
            autoFocus={true}
          />
        </View>
        <TouchableOpacity
          className="bg-black rounded-md py-4 flex-row justify-center items-center"
          onPress={() => NavigationService.navigate(SCREENS.NEWFEED_LEVEL)}
        >
          <Text className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewFeedTopic;
