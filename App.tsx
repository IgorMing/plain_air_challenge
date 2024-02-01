import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "./src/screens/Home";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        style="dark"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}
