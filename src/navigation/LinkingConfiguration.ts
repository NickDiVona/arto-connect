import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './index';

const linking: LinkingOptions<RootStackParamList> = {
  // const linking: LinkingOptions = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Game: {
            screens: {
              GameScreen: 'game'
            }
          },
          Scores: {
            screens: {
              ScoresScreen: 'scores'
            }
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
};

export default linking;
