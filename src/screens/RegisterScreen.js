import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Crie sua conta para começar</Text>

      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Senha atual" secureTextEntry />

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>ou continue com</Text>

      <View style={styles.socialRow}>
        <Image source={require("../../assets/Google.png")} style={styles.socialIcon} />
        <Image source={require("../../assets/Facebook.png")} style={styles.socialIcon} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8, marginBottom: 12 },
  primaryButton: { backgroundColor: "#34A853", padding: 15, borderRadius: 8, marginBottom: 20 },
  primaryButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  divider: { textAlign: "center", marginVertical: 15, color: "#777" },
  socialRow: { flexDirection: "row", justifyContent: "center", gap: 20 },
  socialIcon: { width: 40, height: 40, marginHorizontal: 10 },
  link: { textAlign: "center", marginTop: 10, color: "#34A853", fontWeight: "bold" },
});
