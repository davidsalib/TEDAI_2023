import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const NewFeedHeader = ({
  onBack,
  title,
}: {
  onBack: () => any;
  title: string;
}) => {
  return (
    <View className="px-6 pt-8">
      <TouchableOpacity onPress={onBack}>
        <Icon type={IconType.AntDesign} name="left" />
      </TouchableOpacity>
      <Text className="text-3xl leading-loose font-semibold text-black mt-6">
        {title}
      </Text>
    </View>
  );
};

export default NewFeedHeader;
