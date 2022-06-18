import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TextInputProps,
    TouchableOpacityProps
} from 'react-native'

type InputProps = TextInputProps

interface ButtonProps extends InputProps {
  title: string;
}

export function Input({ ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                {...rest}
                style={styles.inputStyle} />
                
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    inputStyle: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: 15,
        margin: 10,
        borderRadius: 7
      }
})