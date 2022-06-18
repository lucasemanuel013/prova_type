import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert } from 'react-native'

import { Header } from "../../components/Header";
import { EquipamentCard } from '../../components/EquipamentCard';

interface ListEquipamentProps {
  id: string;
  patrimonio: number;
  serie: number;
  marca: string;
  modelo: string;
  custo: string;
  usuario: string;
  setor: string;
  tipo: string;
}

export function ListITEquipament() {
  const [equipaments, setEquipaments] = useState<ListEquipamentProps[]>([])

  async function loadEquipaments() {
    const data = await AsyncStorage.getItem('@si:equipaments')
    if (data) {
        setEquipaments(JSON.parse(data))
    }
  }

  useEffect(() => {
    loadEquipaments()
  }, [equipaments])

  async function handleDeleteEquipament(id: string) {
    setEquipaments(equipaments => equipaments.filter(equip => equip.id !== id))
    Alert.alert('Excluindo os dados')
    await AsyncStorage.setItem('@si:equipaments', JSON.stringify(''))
  }

  return (
    <View style={styles.container}>
      <Header title='Lista de Usuários' />
      <FlatList
        data={equipaments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EquipamentCard
            item={item}
            handleDeleteEquipament={() => handleDeleteEquipament(item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
      },
})

