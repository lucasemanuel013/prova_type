import { StyleSheet, Text, View } from 'react-native';
import { ITEquipament } from './pages/ITEquipament';
import { ListITEquipament } from './pages/ListITEquipament';
import { SearchITEquipament } from './pages/SearchITEquipament';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ITEquipament /> */}
      {/* <ListITEquipament /> */}
      <SearchITEquipament />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
