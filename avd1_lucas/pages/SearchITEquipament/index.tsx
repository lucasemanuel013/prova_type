import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { EquipamentCard } from '../../components/EquipamentCard';
import { ButtonSearch } from '../../components/ButtonSearch';

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

export function SearchITEquipament() {
  const [user, setUser] = useState('')
  const [equipaments, setEquipaments] = useState<ListEquipamentProps[]>([])

  async function loadEquipaments() {
    const dataEquip = await AsyncStorage.getItem('@si:equipaments')
    if (dataEquip) {
      setEquipaments(JSON.parse(dataEquip))
    }
  }

  useEffect(() => {
    loadEquipaments()
  }, [equipaments])

  async function handleDeleteEquipament(id: string) {
  }

  async function searchEquipaments(user: string) {
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Consulta de Equipamentos de TI</Text>

        <TextInput
          style={styles.input}
          placeholder='Usuario'
          placeholderTextColor='#eee'
          value={user}
          onChangeText={value => setUser(value)}
        />

        <ButtonSearch
          searchEquipaments={() => searchEquipaments(user)}
          title='Buscar'
        />

        <Text style={[styles.title, { marginVertical: 20 }]}>
          Resultado da Pesquisa:
        </Text>

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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fff'
  }
})