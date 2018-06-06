import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const verticalScale = size => (height / guidelineBaseHeight) * size;

class DynamicFonts {
  static scale(size) {
    return (width / guidelineBaseWidth) * size;
  }
  static getScaledFontSize(fontSize) {
    const scaleFontSize = DynamicFonts.scale(fontSize);
    const verticalScaleFontSize = verticalScale(fontSize);
    const currentScale = scaleFontSize < verticalScaleFontSize
      ? scaleFontSize
      : verticalScaleFontSize;
    return (fontSize + ((currentScale - fontSize) * 0.5));
  }
}

export default DynamicFonts;
