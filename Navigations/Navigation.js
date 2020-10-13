import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TutoList from '../Components/TutoList'
import EditTuto from '../Components/EditTuto'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={TutoList} />
        <Stack.Screen name="Edit" component={EditTuto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
