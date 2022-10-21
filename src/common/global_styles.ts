import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const global_styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});