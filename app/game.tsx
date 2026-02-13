import MovingBackground from "@/components/MovingBackground";
import { StyleSheet, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={s.container}>
      <MovingBackground />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
  },
});
