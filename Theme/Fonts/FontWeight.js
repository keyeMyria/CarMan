import { Platform } from 'react-native';

export default {
  light: '300',
  normal: '400',
  medium: Platform.OS === 'android' ? '500' : '800',
};
