import { StyleSheet, Text, View } from 'react-native';
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
  const [fullname, setFullname] = useState("Cianan Carey");
  return (
    <View>
      <Text style={styles.paragraph}>Hello, {fullname}</Text>
    </View>
  );
};