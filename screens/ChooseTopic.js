import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function ChooseTopic({ navigation }) {
    const data = [require('../assets/item1.png'), require('../assets/item2.png'), require('../assets/item4.png'), require('../assets/item5.png'), require('../assets/item3.png'), require('../assets/item6.png'), require('../assets/item7.png'), require('../assets/item8.png')]
    return (
        <View style={styles.container}>
            <Text style={{ marginLeft: 10, marginTop: 75, fontSize: 26, fontWeight: 'bold' }}>What Brings you</Text>
            <Text style={{ marginLeft: 10, fontSize: 26, fontWeight: '300' }}>to Silent Moon?</Text>
            <Image style={{ marginTop: -50, alignSelf: 'center' }} source={require('../assets/Union.png')} />
            <Text style={{ marginLeft: 10, marginTop: -700, fontSize: 16, fontWeight: '200' }}>choose a topic to focused on:</Text>
            <FlatList
                numColumns={2}
                horizontal={false}
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
                        <Image style={{ margin: 10, resizeMode: 'cover' }} source={item} />
                    </TouchableOpacity>
                }
                style={{ marginTop: 15 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
