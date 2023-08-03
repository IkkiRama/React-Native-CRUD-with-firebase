import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ref, push } from "firebase/database";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import { FormInput } from "../../components";
import { db } from "./../../config/firebase/index";

export default function Tambah({ navigation }) {
  const [nama, setNama] = useState("");
  const [nomer, setNomer] = useState("");
  const [alamat, setAlamat] = useState("");

  const resetData = () => {
    setNama("");
    setNomer("");
    setAlamat("");
  };

  const onSubmit = () => {
    if (nama.trim() === "" || nomer.trim() == "" || alamat.trim() == "") {
      Alert.alert("Error", "Harap isi semua data!");
    } else {
      push(ref(db, "Kontak"), { nama, nomer, alamat });
      resetData();
      Alert.alert("Sukses", "Data berhasil ditambahkan");
      navigation.replace("Home");
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginTop: 5 }}
        >
          <FontAwesome name="chevron-left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.titlePage}>Tambah Kontak</Text>
      </View>

      <View style={styles.formWrapper}>
        <FormInput
          label="Nama"
          placeholder="Masukkan nama kontak..."
          onChangeText={(value) => setNama(value)}
        ></FormInput>

        <FormInput
          label="Nomer"
          placeholder="Masukkan nomer kontak..."
          keyboardType="number-pad"
          onChangeText={(value) => setNomer(value)}
        ></FormInput>

        <FormInput
          label="Alamat"
          placeholder="Masukkan alamat kontak..."
          isTextArea={true}
          onChangeText={(value) => setAlamat(value)}
        ></FormInput>

        <TouchableOpacity style={styles.tombol} onPress={() => onSubmit()}>
          <Text style={styles.textTombol}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
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
