import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './index';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Game: {
            screens: {
              GameScreen: 'Game'
            }
          },
          Settings: {
            screens: {
              SettingsScreen: 'Settings'
            }
          }
        }
      },
      Modal: 'modal',
      NotFound: '*'
    }
  }
};

export default linking;
