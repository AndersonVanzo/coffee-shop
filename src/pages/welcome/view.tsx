import React, { useContext } from "react";
import {
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../common/colors";
import ButtonBig from "../../components/ButtonBig";
import { WelcomeContext, WelcomeProvider } from "../../contexts/welcome";
import ImageSlider from "./components/ImageSlider";
import Slider from "./components/Slider";

const WelcomeView: React.FC = () => {
  const { step, nextStep } = useContext(WelcomeContext);

  return (
    <LinearGradient style={styles.gradient} colors={['transparent', colors.black]}>
      <ImageSlider />
      <SafeAreaView style={styles.container}>
        <Slider />
        <ButtonBig text={step == 3 ? 'Get Started' : 'Next'} action={nextStep} />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default WelcomeView;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});