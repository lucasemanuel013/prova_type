import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
  } from 'react-native'
  
  interface ListCardProps {
    item: object;
    handleDeleteEquipament: () => void;
  }
  
        // onPress={handleDeleteUser}
  
  export function EquipamentCard({ item, handleDeleteEquipament }: ListCardProps) {
    return (
      <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonCard}
        onPress={handleDeleteEquipament}
      >
        {Object.values(item).map((data, index) => (
          <Text style={styles.textCard} key={index}>
            {index > 0 && data}
          </Text>
        ))}
      </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    buttonCard: {
      backgroundColor: '#1f1e25',
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      margin: 10
    },
    textCard: {
      color: '#fff',
      fontSize: 15,
  
    }
  })