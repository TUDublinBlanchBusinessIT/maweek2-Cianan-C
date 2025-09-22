import { StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  paragraph: {
    margin: 50,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default function App() {
  const [fullName, setFullName] = useState("Cianán Carey");
  return (
    <View>
      <Text style={styles.paragraph}>Hello, {fullName}</Text>

      <TextInput
        style={styles.paragraph}
        onChangeText={setFullName}
        placeholder="Hello"
      />

    </View>
  );
};