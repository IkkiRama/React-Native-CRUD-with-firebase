import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../../config/firebase";

export default function Home({ navigation }) {
  const [kontak, setKontak] = useState({});
  const kontakKeys = Object.keys(kontak);

  useEffect(() => {
    return onValue(ref(db, "Kontak"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataKontak = { ...data };
      setKontak(dataKontak);
    });
  });

  const Hapus = (id) => {
    Alert.alert(
      "Info",
      `Apakah anda yakin akan mengahpsu data ${kontak[id].nama} ?`,
      [
        {
          text: "Cencel",
          onPress: () => alert(`Data tidak dihapus`),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            remove(ref(db, `Kontak/${id}`));
            alert("Data berhasil dihapus");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.page}>
      <Text style={styles.titlePage}>Selamat Datang</Text>

      <View>
        {kontakKeys.length > 0 ? (
          kontakKeys.map((key) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailKontak", {
                  data: kontak[key],
                  id: key,
                })
              }
              style={styles.listKontak}
              key={key}
            >
              <View style={styles.informasiKontak}>
                <Text style={styles.nama}>{kontak[key].nama}</Text>
                <Text style={styles.nomer}>{kontak[key].nomer}</Text>
              </View>
              <View style={styles.ctaKontak}>
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() =>
                    navigation.navigate("UbahKontak", { data: kontak[key] })
                  }
                >
                  <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.hapus}
                  onPress={() => Hapus(key)}
                >
                  <FontAwesome name="trash" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Belum ada data kontak</Text>
        )}

        <Button
          title="Carousel"
          onPress={() => navigation.navigate("Carousel")}
        />
      </View>

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
    paddingHorizontal: 20,
  },

  titlePage: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },

  listKontak: {
    borderColor: "#e4e4e7",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },

  informasiKontak: {
    width: "60%",
  },

  nama: {
    fontSize: 26,
    fontWeight: "700",
    color: "#302f2f",
  },

  alamat: {
    fontSize: 14,
    color: "#434856",
  },

  nomer: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },

  ctaKontak: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  edit: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: "#fab006",
    justifyContent: "center",
    alignItems: "center",
  },

  hapus: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#ce231c",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapperButton: {
    // flex: 1,
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
