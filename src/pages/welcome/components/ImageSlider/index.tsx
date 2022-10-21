import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";
import { WelcomeContext } from "../../../../contexts/welcome";

const ImageSlider = () => {
  const { step } = useContext(WelcomeContext);

  return (
    <View style={styles.container}>
      {step == 1 && <Image source={require('../../../../assets/images/welcome1.jpg')} style={styles.image} />}
      {step == 2 && <Image source={require('../../../../assets/images/welcome2.jpg')} style={styles.image} />}
      {step == 3 && <Image source={require('../../../../assets/images/welcome3.jpg')} style={styles.image} />}
    </View>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});