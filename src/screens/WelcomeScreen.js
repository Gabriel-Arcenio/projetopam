import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, navigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require("../../assets/casual_dog.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja nigga acessar?</Text>

      {/* Botão Google */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate("Login")} // <-- aqui funciona
      >
        <Image
          source={require("../../assets/Google.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Botão Outras opções */}
      <TouchableOpacity
        style={styles.outrosButton}
        onPress={() => navigation.navigate("Register")} // <-- outro exemplo
      >
        <Text style={styles.outrosButtonText}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34A853',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  googleIcon: {
  width: 20,
  height: 20,
  marginRight: 10,
},
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outrosButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  outrosButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
