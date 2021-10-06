import { FontAwesome } from '@expo/vector-icons';
//
//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';

export interface RootStackParamList {}

export interface RootTabParamList {
  TabOne: undefined;
  TabTwo: undefined;
}

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Game">
      <BottomTab.Screen
        name="Game"
        component={TabOneScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="times-rectangle-o" color={'red'} size={20} />;
          }
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabTwoScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="cogs" color={'red'} size={20} />;
          }
        }}
      />
    </BottomTab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
