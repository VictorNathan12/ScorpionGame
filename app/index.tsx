import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/BackgroundMenu.png")}
      resizeMode="stretch"
      style={s.background}
    >
      <View style={s.container}>
        <Link href="/game" asChild>
          <TouchableOpacity style={s.button}>
            <Text style={s.TxtBotton}>JOGAR</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  TxtBotton: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(0, 0, 0)",
  },
  button: {
    backgroundColor: "#ffffff81",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#535353",
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
