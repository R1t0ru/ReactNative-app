import { Text, View, StyleSheet } from "react-native";

export default function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Donations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage:{
      width:320,
      height:480,
  }
});
