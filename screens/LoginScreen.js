import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {

        if (
            username.trim() === 'Deverick' &&
            password.trim() === '123'
        ) {

            await AsyncStorage.setItem('login', 'true');

            navigation.replace('Dashboard');

        } else {

            Alert.alert('Login Gagal');

        }
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: 20,
                }}
            >

                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginBottom: 30,
                        textAlign: 'center'
                    }}
                >
                    Farm Apps_0320240020
                </Text>

                <Text>Username</Text>

                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={{
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5
                    }}
                />

                <Text>Password</Text>

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={{
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5
                    }}
                />

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={login}
                    style={{
                        backgroundColor: 'skyblue',
                        padding: 15,
                        borderRadius: 5,
                    }}
                >

                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        LOGIN
                    </Text>

                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}