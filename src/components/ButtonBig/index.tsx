import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../common/colors";

interface BigButtonProps {
  text: string,
  action: () => void;
}

const BigButton = ({ text, action }: BigButtonProps): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container} onPress={() => action()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default memo(BigButton);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary500,
    borderRadius: 16,
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});