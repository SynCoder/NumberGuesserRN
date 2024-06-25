import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: COLORS.YELLOW1,
  },
});
