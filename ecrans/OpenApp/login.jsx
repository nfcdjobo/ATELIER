import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';




export default function Login() {
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');


    const handleDigitChange = (digit, setValue) => {
        // Ensure only numeric input
        const sanitizedDigit = digit.replace(/[^0-9]/g, '');
        // Update state and move focus to the next input
        setValue(sanitizedDigit);
    };

    const handleSubmit = () => {
        const password = digit1 + digit2 + digit3 + digit4;
        // Faites quelque chose avec le mot de passe, par exemple, le soumettre à un backend
        console.log('Mot de passe soumis:', password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.passwordInputContainer}>
                <TextInput
                style={styles.passwordInput}
                maxLength={1}
                keyboardType="numeric"
                secureTextEntry
                value={digit1}
                onChangeText={(text) => handleDigitChange(text, setDigit1)}
                />
                <TextInput
                style={styles.passwordInput}
                maxLength={1}
                keyboardType="numeric"
                secureTextEntry
                value={digit2}
                onChangeText={(text) => handleDigitChange(text, setDigit2)}
                />
                <TextInput
                style={styles.passwordInput}
                maxLength={1}
                keyboardType="numeric"
                secureTextEntry
                value={digit3}
                onChangeText={(text) => handleDigitChange(text, setDigit3)}
                />
                <TextInput
                style={styles.passwordInput}
                maxLength={1}
                keyboardType="numeric"
                secureTextEntry
                value={digit4}
                onChangeText={(text) => handleDigitChange(text, setDigit4)}
                />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Button style={styles.submitButtonText}>Soumettre</Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordInputContainer: {
        flexDirection: 'row',
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: 20,
        height: 20,
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});