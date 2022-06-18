import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native'
  
  interface IHeaderProps {
    title: string;
  }
  
  export function Header({ title }: IHeaderProps) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
  export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      alignItems: 'center',
      marginBottom: 15,
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
      color: '#f3f3f3',
      fontWeight: 'bold',
    }
  })