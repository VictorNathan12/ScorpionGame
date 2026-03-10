import MovingBackground from "@/components/MovingBackground";
import Obstacle from "@/components/Obstacle";
import Score from "@/components/Score";
import Scorpion from "@/components/Scorpion";
import { useGame } from "@/hooks/gameHook";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function GameScreen() {
  const { jump } = useGame();
  const [obstacle, setObstacle] = useState([] as any);

  function spawnObstacle() {
    setObstacle((oldvalue: any) => [...oldvalue, Date.now().toString()]);
  }

  function removeObstacle(id: any) {
    setObstacle((oldValue: any) =>
      oldValue.filter((obstacle: any) => obstacle !== id),
    );
  }

  useEffect(() => {
    const interval = setInterval(() => spawnObstacle(), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Pressable onPress={jump} style={s.button}>
      <View style={s.container}>
        <MovingBackground />
        <Scorpion />
        <Score />
        {obstacle.map((obstacle: any) => (
          <Obstacle key={obstacle} onEnd={() => removeObstacle(obstacle)} />
        ))}
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
    position: "relative",
  },
});
