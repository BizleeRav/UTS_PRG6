import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

export default function DashboardScreen({ navigation }) {

    const [data, setData] = useState([]);

    const getData = async () => {

        try {

            const response = await api.get('/farm');

            setData(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useFocusEffect(

        useCallback(() => {

            getData();

        }, [])

    );

    const totalHewan = data.length;

    const totalAssets = data.reduce(
        (total, item) => total + item.hargaHewan,
        0
    );

    const hargaTermahal = Math.max(
        ...data.map(item => item.hargaHewan),
        0
    );

    const jumlahSapi =
        data.filter(item => item.jenisHewan === '1').length;

    const jumlahDomba =
        data.filter(item => item.jenisHewan === '2').length;

    const jumlahKambing =
        data.filter(item => item.jenisHewan === '3').length;

    let jenisTerbanyak = '-';

    if (
        jumlahSapi >= jumlahDomba &&
        jumlahSapi >= jumlahKambing
    ) {

        jenisTerbanyak = 'Sapi';

    } else if (
        jumlahDomba >= jumlahSapi &&
        jumlahDomba >= jumlahKambing
    ) {

        jenisTerbanyak = 'Domba';

    } else {

        jenisTerbanyak = 'Kambing';
    }

    return (

        <ScrollView
            style={{
                flex:1,
                backgroundColor:'white'
            }}
        >

            <View
                style={{
                    padding:20
                }}
            >

                <Text
                    style={{
                        fontSize:22,
                        fontWeight:'bold',
                        textAlign:'center',
                        fontStyle:'italic',
                        marginBottom:10
                    }}
                >
                    Farm Apps 0320240020
                </Text>

                <View
                    style={{
                        borderBottomWidth:2,
                        marginBottom:20
                    }}
                />

                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'bold',
                        marginBottom:15
                    }}
                >
                    Dashboard
                </Text>

                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginBottom:12
                    }}
                >

                    <View
                        style={{
                            width:'48%',
                            borderWidth:2,
                            borderRadius:15,
                            padding:15,
                            alignItems:'center',
                            backgroundColor:'cyan'
                        }}
                    >

                        <Text
                            style={{
                                fontSize:20,
                                fontWeight:'bold'
                            }}
                        >
                            {totalHewan} Ekor
                        </Text>

                        <Text
                            style={{
                                marginTop:5,
                                fontSize:12
                            }}
                        >
                            Total Hewan
                        </Text>

                    </View>

                    <View
                        style={{
                            width:'48%',
                            borderWidth:2,
                            borderRadius:15,
                            padding:15,
                            alignItems:'center',
                            backgroundColor:'tomato'
                        }}
                    >

                        <Text
                            style={{
                                fontSize:14,
                                fontWeight:'bold'
                            }}
                        >
                            Rp {totalAssets.toLocaleString('id-ID')}
                        </Text>

                        <Text
                            style={{
                                marginTop:5,
                                fontSize:12
                            }}
                        >
                            Total Assets
                        </Text>

                    </View>

                </View>

                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginBottom:25
                    }}
                >

                    <View
                        style={{
                            width:'48%',
                            borderWidth:2,
                            borderRadius:15,
                            padding:15,
                            alignItems:'center',
                            backgroundColor:'tomato'
                        }}
                    >

                        <Text
                            style={{
                                fontSize:20,
                                fontWeight:'bold'
                            }}
                        >
                            {jenisTerbanyak}
                        </Text>

                        <Text
                            style={{
                                marginTop:5,
                                fontSize:12
                            }}
                        >
                            Jenis Terbanyak
                        </Text>

                    </View>

                    <View
                        style={{
                            width:'48%',
                            borderWidth:2,
                            borderRadius:15,
                            padding:15,
                            alignItems:'center',
                            backgroundColor:'cyan'
                        }}
                    >

                        <Text
                            style={{
                                fontSize:14,
                                fontWeight:'bold'
                            }}
                        >
                            Rp {hargaTermahal.toLocaleString('id-ID')}
                        </Text>

                        <Text
                            style={{
                                marginTop:5,
                                fontSize:12
                            }}
                        >
                            Harga Termahal
                        </Text>

                    </View>

                </View>

                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'bold',
                        marginBottom:15
                    }}
                >
                    Feature
                </Text>

                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginBottom:30
                    }}
                >

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sapi')}
                        style={{
                            width:'30%',
                            borderWidth:2,
                            borderRadius:10,
                            padding:15,
                            alignItems:'center'
                        }}
                    >

                        <Text
                            style={{
                                fontWeight:'bold'
                            }}
                        >
                            Sapi
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Domba')}
                        style={{
                            width:'30%',
                            borderWidth:2,
                            borderRadius:10,
                            padding:15,
                            alignItems:'center'
                        }}
                    >

                        <Text
                            style={{
                                fontWeight:'bold'
                            }}
                        >
                            Domba
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Kambing')}
                        style={{
                            width:'30%',
                            borderWidth:2,
                            borderRadius:10,
                            padding:15,
                            alignItems:'center'
                        }}
                    >

                        <Text
                            style={{
                                fontWeight:'bold'
                            }}
                        >
                            Kambing
                        </Text>

                    </TouchableOpacity>

                </View>

                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'bold',
                        marginBottom:15
                    }}
                >
                    Form Data
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail')}
                    style={{
                        borderWidth:2,
                        borderRadius:10,
                        padding:15,
                        alignItems:'center',
                        backgroundColor:'skyblue'
                    }}
                >

                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'bold'
                        }}
                    >
                        + Add Data
                    </Text>

                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}