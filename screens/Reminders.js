import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Reminders({ navigation }) {
    const [sn, setSN] = useState(0);
    const [mo, setMO] = useState(0);
    const [tu, setTU] = useState(0);
    const [we, setWE] = useState(0);
    const [th, setTH] = useState(0);
    const [fr, setFR] = useState(0);
    const [sa, setSA] = useState(0);
    const [date, setDate] = useState(new Date(Date.now()));
    return (
        <View style={styles.container}>
            <Text style={{ marginLeft: 10, marginTop: 75, fontSize: 24, fontWeight: '500' }}>What time would you</Text>
            <Text style={{ marginLeft: 10, fontSize: 24, fontWeight: '500' }}>like to meditate?</Text>
            <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 16, fontWeight: '200', width: '80%' }}>Any time you can choose but We recommend first thing in th morning.</Text>
            <DateTimePicker
                onConfirm={(date) => setDate(date)} 
                value={date}
                mode={'time'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                // onChange={onChange}
                style={{ alignSelf: 'center' }}
            />
            <Text style={{ marginLeft: 10, marginTop: 30, fontSize: 24, fontWeight: '500' }}>Which day would you </Text>
            <Text style={{ marginLeft: 10, fontSize: 24, fontWeight: '500' }}>like to meditate?</Text>
            <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 16, fontWeight: '200', width: '80%' }}>Everyday is best, but we recommend picking at least five.</Text>
            <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ backgroundColor: sn % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: sn % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setSN(sn + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: sn % 2 == 1 ? 'white' : 'black' }}>SN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: mo % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: mo % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setMO(mo + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: mo % 2 == 1 ? 'white' : 'black' }}>MO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: tu % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: tu % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setTU(tu + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: tu % 2 == 1 ? 'white' : 'black' }}>TU</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: we % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: we % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setWE(we + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: we % 2 == 1 ? 'white' : 'black' }}>WE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: th % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: th % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setTH(th + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: th % 2 == 1 ? 'white' : 'black' }}>TH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: fr % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: fr % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setFR(fr + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: fr % 2 == 1 ? 'white' : 'black' }}>FR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: sa % 2 == 1 ? 'black' : 'white', height: 40, width: 40, borderRadius: 30, borderColor: sa % 2 == 1 ? 'white' : 'black', justifyContent: 'center', borderWidth: 1 }} onPress={() => setSA(sa + 1)}>
                    <Text style={{ color: 'white', alignSelf: 'center', color: sa % 2 == 1 ? 'white' : 'black' }}>SA</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tabbar')} style={{ marginTop: 50, justifyContent: 'center', width: '80%', alignSelf: 'center', borderRadius: 30, height: 60, backgroundColor: '#8E97FD' }}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tabbar')} style={{ marginTop: 20, alignSelf: 'center' }}>
                <Text>NO THANKS</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
