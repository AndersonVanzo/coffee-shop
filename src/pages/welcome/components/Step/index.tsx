import React, { useContext } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../../../common/colors";
import { WelcomeContext } from "../../../../contexts/welcome";

const Step = (): JSX.Element => {
  const { step } = useContext(WelcomeContext);

  return (
    <View style={styles.container}>
      <View style={[step == 1 ? styles.selected : styles.unselected]} />
      <View style={[step == 2 ? styles.selected : styles.unselected]} />
      <View style={[step == 3 ? styles.selected : styles.unselected]} />
    </View>
  );
}

export default Step;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    width: '100%',
  },
  unselected: {
    backgroundColor: colors.gray400,
    borderRadius: 1.5,
    flex: .3,
    height: 3,
  },
  selected: {
    backgroundColor: colors.primary500,
    borderRadius: 1.5,
    flex: .3,
    height: 3,
  },
});