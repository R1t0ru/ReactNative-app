import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const colorA = '#c36878';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerStyle:{backgroundColor:colorA}}}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon:({ size})=>(
        <MaterialCommunityIcons name="home" color={colorA} size={size}/>
      )
      }} />
      <Tabs.Screen name="forms" options={{ title: "Formulaire" , tabBarIcon:({ size})=>(
        <MaterialCommunityIcons name="form-select" color={colorA} size={size}/>
      )}} />
      <Tabs.Screen name="donation" options={{title: "Donations", tabBarIcon:({ size})=>(
        <MaterialCommunityIcons name="hand-coin" color={colorA} size={size}/>
      )}} />
      <Tabs.Screen name="info1" options={{title: "Informations", tabBarIcon:({ size})=>(
        <MaterialCommunityIcons name="information" color={colorA} size={size}/>
      )}} />
            <Tabs.Screen name="mention" options={{ title: "Mention Légales" , tabBarIcon:({ size})=>(
        <MaterialCommunityIcons name="file-certificate" color={colorA} size={size}/>
      )}} />
    </Tabs>
  );
}
