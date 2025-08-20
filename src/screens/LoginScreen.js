import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso</Text>
      <Text style={styles.subtitle}>Entre para continuar</Text>

      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.secondaryButtonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>ou continue com</Text>

      <View style={styles.socialRow}>
        <Image source={require("../../assets/Google.png")} style={styles.socialIcon} />
        <Image source={require("../../assets/Facebook.png")} style={styles.socialIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8, marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "flex-end", marginBottom: 15 },
  link: { color: "#34A853", fontWeight: "bold" },
  primaryButton: { backgroundColor: "#34A853", padding: 15, borderRadius: 8, marginBottom: 10 },
  primaryButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  secondaryButton: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 8 },
  secondaryButtonText: { textAlign: "center", fontWeight: "bold" },
  divider: { textAlign: "center", marginVertical: 15, color: "#777" },
  socialRow: { flexDirection: "row", justifyContent: "center", gap: 20 },
  socialIcon: { width: 40, height: 40, marginHorizontal: 10 },
});
