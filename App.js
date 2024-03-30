import React from "react";
import { View, Text } from "react-native";
import Routes from "./routes";

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* Ici on importe nos route */}
      <Routes />
    </View>
  );
};

export default App;