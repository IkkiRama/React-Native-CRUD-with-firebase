import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Detail = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={styles.page}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titlePage}>{`Detail Kontak ${data.nama}`}</Text>
      </View>

      <View style={styles.listKontak}>
        <View style={styles.perList}>
          <Text style={styles.headerKontak}>Nama :</Text>
          <Text style={styles.data}>{data.nama}</Text>
        </View>
        <View style={styles.perList}>
          <Text style={styles.headerKontak}>Nomer :</Text>
          <Text style={styles.data}>{data.nomer}</Text>
        </View>
        <View style={styles.perList}>
          <Text style={styles.headerKontak}>Alamat :</Text>
          <Text style={styles.data}>{data.alamat}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.tombol}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textTombol}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  titleWrapper: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  titlePage: {
    fontSize: 26,
    marginLeft: 10,
    fontWeight: "700",
  },

  listKontak: {
    borderColor: "#e4e4e7",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  perList: {
    marginVertical: 10,
  },

  headerKontak: {
    fontSize: 20,
    fontWeight: "600",
  },

  tombol: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0175F4",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },

  textTombol: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
