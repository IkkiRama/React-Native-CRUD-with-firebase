import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.titlePage}>Selamat Datang</Text>
      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => {
            navigation.navigate("TambahKontak");
          }}
        >
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  titlePage: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  wrapperButton: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "skyblue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
