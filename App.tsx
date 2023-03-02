import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from "react-native"

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Value:{value}
      </Text>
      <View style={styles.button}>
        <Button title="Increment" onPress={() => setValue(value + 1)}></Button>
      </View>
      <View style={styles.button}>
        <Button title="Decrement" onPress={() => setValue(value - 1)}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
    color: "white"
  },
  button: {
    margin: 10
  },
})

export default App