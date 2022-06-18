import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function ITEquipament() {

  const [patrimonio, setPatrimonio] = useState('')
  const [serie, setSerie] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [custo, setCusto] = useState('')
  const [usuario, setUsuario] = useState('')
  const [setor, setSetor] = useState('')
  const [tipo, setTipo] = useState('')
  

  
  async function handleAddNewEquipament() {
    const cadastro = {
      id: new Date().getTime(),
      patrimonio,
      serie,
      marca,
      modelo,
      custo,
      usuario,
      setor,
      tipo
    }
    try {
      const equipamentData = await AsyncStorage.getItem('@si:equipaments')
      const currentData = equipamentData ? JSON.parse(equipamentData) : []
      const equipamentDataFormatted = [
        ...currentData,
        cadastro
      ]
      await AsyncStorage.setItem('@si:equipaments', JSON.stringify(equipamentDataFormatted))
      setPatrimonio('')
      setSerie('')
      setMarca('')
      setModelo('')
      setCusto('')
      setUsuario('')
      setSetor('')
      setTipo('')
    } catch (err) {
      console.log(err)
      Alert.alert('Erro ao cadastrar os dados')
    }
  }

  async function loadEquipaments() {
    const storagedTasks = await AsyncStorage.getItem('@si:equipaments')
    const currentData = storagedTasks ? JSON.parse(storagedTasks) : []
    console.log(currentData)
  }

  useEffect(() => {
    loadEquipaments()
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Header title='Cadastro de Equipamentos de TI' />

        <ScrollView>
        
        <Input
          placeholder='Número do Patrimônio'
          placeholderTextColor='#eee'
          value={patrimonio}
          onChangeText={value => setPatrimonio(value)}
        />

        <Input
          placeholder='Número de Série'
          placeholderTextColor='#eee'
          value={serie}
          onChangeText={value => setSerie(value)}
        />

        <Input
          placeholder='Marca'
          placeholderTextColor='#eee'
          value={marca}
          onChangeText={value => setMarca(value)}
        />
        <Input
          placeholder='Modelo'
          placeholderTextColor='#eee'
          value={modelo}
          onChangeText={value => setModelo(value)}
        />
        <Input
          placeholder='Centro de Custo'
          placeholderTextColor='#eee'
          value={custo}
          onChangeText={value => setCusto(value)}
        />
        <Input
          placeholder='Usuário'
          placeholderTextColor='#eee'
          value={usuario}
          onChangeText={value => setUsuario(value)}
        />
        <Input
          placeholder='Setor'
          placeholderTextColor='#eee'
          value={setor}
          onChangeText={value => setSetor(value)}
        />
        <Input
          placeholder='Tipo'
          placeholderTextColor='#eee'
          value={tipo}
          onChangeText={value => setTipo(value)}
        />
        </ScrollView>

        <Button
          title='Incluir'
          handleAddNewEquipament={handleAddNewEquipament}
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
    fontWeight: 'bold'
  }
})
