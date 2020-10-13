
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native'


import TutoList from './Components/TutoList'
import {getalltuto} from './Api/tutoApi'

export default class App extends React.Component {

//affichage api test
  state ={
    data:[]
  }
  fetchData = async()=>{
    const response= await fetch('http://172.21.201.23:8080/api/tutorials')
    const tutorials = await response.json()
    this.setState({data:tutorials})
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
  return(
    <View>
    <FlatList
         data={this.state.data}
         keyExtractor={(item,index) => index.toString()}
         renderItem={({item}) =>
         <View>
           <Text>{item.title}</Text>
           <Text>{item.description}</Text>
           </View>}
       />
    </View>
  )
}
}
