import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function DetailScreen({ route, navigation }) {

    const item = route.params?.item;

    const [pemilikHewan, setPemilikHewan] =
        useState(item?.pemilikHewan || '');

    const [jenisHewan, setJenisHewan] =
        useState(item?.jenisHewan || '');

    const [beratHewan, setBeratHewan] =
        useState(item?.beratHewan?.toString() || '');

    const [kandangHewan, setKandangHewan] =
        useState(item?.kandangHewan || '');

    const [hargaHewan, setHargaHewan] =
        useState('0');

    useEffect(() => {

        let harga = 0;

        const berat = parseInt(beratHewan) || 0;

        if (jenisHewan === '1') {

            harga = berat * 10000;

        } else if (jenisHewan === '2') {

            harga = berat * 7500;

        } else if (jenisHewan === '3') {

            harga = berat * 6000;
        }

        setHargaHewan(
            harga.toLocaleString('id-ID')
        );

    }, [jenisHewan, beratHewan]);

    const save = async () => {

        try {

            await api.post('/farm', {
                pemilikHewan,
                jenisHewan,
                beratHewan,
                kandangHewan
            });

            Alert.alert('Berhasil');

            navigation.goBack();

        } catch (error) {

            console.log(error);

            Alert.alert('Gagal Simpan');
        }
    };

    const deleteData = async () => {

        try {

            await api.delete('/farm/' + item.idHewan);

            Alert.alert('Delete Success');

            navigation.goBack();

        } catch (error) {

            console.log(error);

            Alert.alert('Delete Gagal');
        }
    };

    return (

        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >

            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 20,
                    textAlign: 'center'
                }}
            >
                Detail Hewan
            </Text>

            <Text>Pemilik Hewan</Text>

            <TextInput
                value={pemilikHewan}
                onChangeText={setPemilikHewan}
                style={{
                    borderWidth: 1,
                    marginBottom: 15,
                    padding: 10,
                    borderRadius: 5
                }}
            />

            <Text>Jenis Hewan</Text>

            <TextInput
                value={jenisHewan}
                onChangeText={setJenisHewan}
                style={{
                    borderWidth: 1,
                    marginBottom: 15,
                    padding: 10,
                    borderRadius: 5
                }}
            />

            <Text>Berat Hewan</Text>

            <TextInput
                value={beratHewan}
                onChangeText={setBeratHewan}
                keyboardType='numeric'
                style={{
                    borderWidth: 1,
                    marginBottom: 15,
                    padding: 10,
                    borderRadius: 5
                }}
            />

            <Text>Kandang Hewan</Text>

            <TextInput
                value={kandangHewan}
                onChangeText={setKandangHewan}
                style={{
                    borderWidth: 1,
                    marginBottom: 15,
                    padding: 10,
                    borderRadius: 5
                }}
            />

            <Text>Harga Hewan</Text>

            <TextInput
                value={hargaHewan}
                editable={false}
                style={{
                    borderWidth: 1,
                    marginBottom: 20,
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: '#ddd'
                }}
            />

            <TouchableOpacity
                onPress={save}
                style={{
                    backgroundColor: 'skyblue',
                    padding: 15,
                    marginBottom: 20,
                    borderRadius: 5
                }}
            >

                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Simpan
                </Text>

            </TouchableOpacity>

            {
                item &&

                <TouchableOpacity
                    onPress={deleteData}
                    style={{
                        backgroundColor: 'red',
                        padding: 15,
                        borderRadius: 5
                    }}
                >

                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        Delete
                    </Text>

                </TouchableOpacity>
            }

        </View>
    );
}