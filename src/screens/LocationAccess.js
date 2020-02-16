import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import { theme } from "../core/theme";
import { logoutUser } from "../api/auth-api";


const LocationAccess = ({ navigation }) => {
  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("Dashboard")} /> */}

      <Logo />

      <Header>Location Access</Header>

      <Button mode="contained" onPress={() => navigation.navigate("Dashboard")}>
        Accept
      </Button>

      <Button mode="outlined">
        Deny
      </Button>

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => logoutUser()}>
          <Text style={styles.label}>Logout</Text>
        </TouchableOpacity>
      </View>

    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(LocationAccess);
