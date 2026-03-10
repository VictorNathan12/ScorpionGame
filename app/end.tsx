import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function End() {
  const { score } = useGame();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("@/assets/images/Background1.png")}
      />

      <View style={styles.dino}>
        <Image
          source={require("@/assets/images/ScorpionMorte.gif")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.obstacle}>
        <Image
          source={require("@/assets/images/ObstaculoComemorando.gif")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Image
          source={require("@/assets/images/Fatality.webp")}
          style={styles.fatality}
          resizeMode="contain"
        />

        <Text style={styles.text}>{score}</Text>

        <Link href="/" asChild>
          <Text style={styles.button}>Voltar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  image: { width: "100%", height: "100%" },

  dino: {
    width: 200,
    height: 250,
    position: "absolute",
    zIndex: 10,
    bottom: "2%",
    left: 100,
  },

  obstacle: {
    width: 200,
    height: 250,
    position: "absolute",
    bottom: "2%",
    left: 700,
  },

  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    gap: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  fatality: {
    width: 300,
    height: 150,
  },

  text: {
    width: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },

  button: {
    width: "auto",
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    color: "white",
  },
});
