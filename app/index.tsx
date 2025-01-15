import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

import { Link } from "expo-router";

import icefCoffeeImg from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icefCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>
        <View>
        <Link href="/explore" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 4,
  },
  button: {
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  // gap: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: 10
  // }
});
