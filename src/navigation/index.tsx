import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import NewFeedTopic from "@screens/NewFeed/NewFeedTopic";
import HomeScreen from "@screens/home/HomeScreen";
import NewFeedLevel from "@screens/NewFeed/NewFeedLevel";
import NewFeedVoice from "@screens/NewFeed/NewFeedVoice";
import NewFeedSubtopic from "@screens/NewFeed/NewFeedSubtopics";
import NewFeedSources from "@screens/NewFeed/NewFeedSources";
import FeedDetails from "@screens/Feed/FeedDetails";
import NewFeedLanguage from "@screens/NewFeed/NewFeedLanguage";

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const NewFeedStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.NEWFEED_TOPIC} component={NewFeedTopic} />
      <Stack.Screen name={SCREENS.NEWFEED_LEVEL} component={NewFeedLevel} />
      <Stack.Screen name={SCREENS.NEWFEED_VOICE} component={NewFeedVoice} />
      <Stack.Screen
        name={SCREENS.NEWFEED_LANGUAGE}
        component={NewFeedLanguage}
      />
      <Stack.Screen name={SCREENS.NEWFEED_SOURCES} component={NewFeedSources} />
      <Stack.Screen
        name={SCREENS.NEWFEED_SUBTOPIC}
        component={NewFeedSubtopic}
      />
    </Stack.Navigator>
  );

  const FeedStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.FEED_DETAILS} component={FeedDetails} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.FEED_STACK} component={FeedStack} />
        <Stack.Screen name={SCREENS.NEWFEED_STACK} component={NewFeedStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
