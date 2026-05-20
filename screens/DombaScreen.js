import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function DombaScreen({ navigation }) {

    const [data, setData] = useState([]);

    const getData = async () => {

        const response = await api.get('/farm/category/2');

        setData(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{flex:1,padding:20}}>

            <FlatList
                data={data}
                keyExtractor={(item) => item.idHewan.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Detail', {
                                item:item
                            })
                        }
                        style={{
                            borderWidth:1,
                            padding:20,
                            marginBottom:10,
                            borderRadius:5
                        }}
                    >
                        <Text>{item.pemilikHewan}</Text>
                        <Text>    Rp {item.hargaHewan.toLocaleString('id-ID')}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}