import {
    TouchableOpacity,
    Text,
    StyleSheet
  } from 'react-native'
  
  interface ButtonProps {
    searchEquipaments: () => void;
    title: string;
  }
  
  export function ButtonSearch({ searchEquipaments, title }: ButtonProps) {
    return (
      <TouchableOpacity
        style={styles.buttonCard}
        activeOpacity={0.7}
        onPress={searchEquipaments}
      >
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 50
    },
    buttonCard: {
        width: '100%',
        padding: 10,
        marginTop: 15,
        height: 50,
        backgroundColor: '#a13737',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})