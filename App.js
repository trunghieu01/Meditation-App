import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpandSignIn from './screens/SignUpandSignIn'
import SignUp from './screens/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import ChooseTopic from './screens/ChooseTopic'
import Reminders from './screens/Reminders'
import SleepStories from './screens/SleepStories';
import Tabbar from './screens/Tabbar';
import Wellcome from './screens/Wellcome'
import WellcomeToSleep from './screens/WellcomeToSleep'
import PlayOption from './screens/PlayOption'
import SleepMusic from './screens/SleepMusic'
import GoodMorning from './screens/Meditate';
import MusicMorning from './screens/MusicMorning';
import MusicNight from './screens/MusicNight';
import Course from './screens/Course';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpandSignIn" screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Tabbar' component={Tabbar} />
        <Stack.Screen name="SignUpandSignIn" component={SignUpandSignIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='WellCome' component={Wellcome} />
        <Stack.Screen name='WellComeToSleep' component={WellcomeToSleep} />
        <Stack.Screen name='ChooseTopic' component={ChooseTopic} />
        <Stack.Screen name='Reminders' component={Reminders} />
        <Stack.Screen name='SleepStories' component={SleepStories} />
        <Stack.Screen name='PlayOption' component={PlayOption} />
        <Stack.Screen name='SleepMusic' component={SleepMusic} />
        <Stack.Screen name='Meditate' component={GoodMorning} />
        <Stack.Screen name='MusicMorning' component={MusicMorning} />
        <Stack.Screen name='MusicNight' component={MusicNight} />
        <Stack.Screen name='Course' component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
