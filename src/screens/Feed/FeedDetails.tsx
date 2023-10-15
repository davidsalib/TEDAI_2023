import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SoundPlayer from "react-native-sound-player";
import { SwipeListView } from "react-native-swipe-list-view";

const listData = [
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav",
  },
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://via.placeholder.com/150",
  },
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://via.placeholder.com/150",
  },
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://via.placeholder.com/150",
  },
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://via.placeholder.com/150",
  },
  {
    title: "Episode X [subtopic]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. ",
    url: "https://via.placeholder.com/150",
  },
];
const FeedDetails = () => {
  const { params } = useRoute();

  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    // const newData = [...listData];
    // const prevIndex = listData.findIndex(item => item.key === rowKey);
    // newData.splice(prevIndex, 1);
    // setListData(newData);
  };

  //   const renderItem = (data: any) => (
  //     <View
  //       className="bg-white flex-row px-6 justify-center items-center border-b border-neutral-200"
  //       style={{ height: 120 }}
  //     >
  //       <View className="flex-1">
  //         <Text className="text-black text-xl font-semibold">
  //           {data.item.title}
  //         </Text>
  //         <Text className="text-black">{data.item.description}</Text>
  //       </View>
  //       <TouchableOpacity
  //         className="bg-neutral-100 rounded-full items-center justify-center w-12 h-12"
  //         onPress={() => SoundPlayer.playUrl(data.item.url)}
  //       >
  //         <Icon
  //           type={IconType.Ionicons}
  //           name="play"
  //           size={20}
  //           className="text-neutral-900"
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   );

  const renderHiddenItem = (data: any, rowMap: any) => (
    <View
      className="bg-neutral-100 flex-row justify-between"
      style={{ height: 120 }}
    >
      <TouchableOpacity
        onPress={() => closeRow(rowMap, data.item.key)}
        className="justify-center items-center w-24 h-full px-4 bg-blue-500"
      >
        <Icon
          type={IconType.AntDesign}
          name="plus"
          size={20}
          className="text-white mb-1"
        />
        <Text className="text-white font-medium text-md text-center">
          Next Episode
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => closeRow(rowMap, data.item.key)}
        className="justify-center items-center w-24 h-full px-4 bg-red-500"
      >
        <Icon
          type={IconType.AntDesign}
          name="minus"
          size={20}
          className="text-white mb-1"
        />
        <Text className="text-white font-medium text-md text-center">
          Less Like This
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="border-b flex-row items-center border-neutral-200 px-6 py-6">
        <View className="border grow-0 border-neutral-200 rounded-lg mr-6">
          <Image
            source={{ uri: params.thumbnailUrl }}
            className="w-24 h-24 bg-neutral-200 rounded-lg"
          />
        </View>
        <Text className="flex-1 text-3xl font-semibold text-black">
          {params.feedName}
        </Text>
      </View>
      <SwipeListView
        className="flex-1"
        recalculateHiddenLayout={true}
        data={listData}
        renderItem={(data) => <EpisodeRow {...data} />}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={98}
        rightOpenValue={-98}
        onRowDidOpen={() => console.log("row open")}
      />
    </SafeAreaView>
  );
};

const EpisodeRow = (data: any) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <View
      className="bg-white flex-row px-6 justify-center items-center border-b border-neutral-200"
      style={{ height: 120 }}
    >
      <View className="flex-1">
        <Text className="text-black text-xl font-semibold">
          {data.item.title}
        </Text>
        <Text className="text-black">{data.item.description}</Text>
      </View>
      <TouchableOpacity
        className="bg-neutral-100 rounded-full items-center justify-center w-12 h-12"
        onPress={() => {
          if (isPlaying) {
            SoundPlayer.pause();
          } else {
            SoundPlayer.playUrl(data.item.url);
          }
          setIsPlaying(!isPlaying);
        }}
      >
        <Icon
          type={IconType.Ionicons}
          name={isPlaying ? "pause" : "play"}
          size={20}
          className="text-neutral-900"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FeedDetails;
