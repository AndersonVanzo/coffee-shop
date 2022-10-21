import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../../../common/colors";
import { global_styles } from "../../../../common/global_styles";
import { WelcomeContext } from "../../../../contexts/welcome";
import Step from "../Step";

const Slider = (): JSX.Element => {
  const { step } = useContext(WelcomeContext);

  const content = [
    {
      title: 'Let\'s explore kinds of coffee',
      text: 'Let\'s explore various coffee flavors with us just few clicks',
    },
    {
      title: 'Monitor and visit the ',
      text: 'Monitor the state of the coffee and visit with your friends',
    },
    {
      title: 'Get ready for the newest coffee',
      text: 'Get ready to try the newest coffee variant with your friends',
    },
  ]

  return (
    <View>
      <Text style={styles.title}>{content[step - 1].title}</Text>
      <Text style={global_styles.text}>{content[step - 1].text}</Text>
      <Step />
    </View>
  );
}

export default Slider;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 20,
  },
});