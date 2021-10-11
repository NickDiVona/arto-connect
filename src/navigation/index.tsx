import { FontAwesome5 } from '@expo/vector-icons';
//
//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import NotFoundScreen from 'screens/notFoundScreen';
import GameScreen from 'screens/gameScreen';
import ScoresScreen from 'screens/ScoresScreen';
import SettingsScreen from 'screens/settingsScreen';
import LinkingConfiguration from './LinkingConfiguration';

export interface RootStackParamList {
  Root: undefined;
  NotFound: undefined;
}

export interface RootTabParamList {
  Game: undefined;
  Settings: undefined;
  HighScore: undefined;
}

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Game" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Scores"
        component={ScoresScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="award" color={'red'} size={20} />;
          }
        }}
      />
      <BottomTab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarIcon: () => {
            // return <FontAwesome5 name="border-all" color={'red'} size={20} />;
            return <FontAwesome5 name="play-circle" color={'red'} size={20} />;
          }
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="cogs" color={'red'} size={20} />;
          }
        }}
      />
    </BottomTab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {/* <NavigationContainer> */}
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
