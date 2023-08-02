import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const FormInput = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
}) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label} :</Text>
      <TextInput
        multiline={isTextArea ? true : false}
        numberOfLines={isTextArea ? 4 : 1}
        placeholder={placeholder}
        style={[styles.input, isTextArea ? styles.textArea : ""]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 10,
  },

  textArea: {
    textAlignVertical: "top",
  },

  label: {
    fontSize: 18,
    fontWeight: "500",
  },

  input: {
    borderColor: "#e4e4e7",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },
});
