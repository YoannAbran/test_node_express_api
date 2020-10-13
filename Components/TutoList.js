import {getalltuto} from '../Api/tutoApi'
import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

class TutoList extends React.Component {

  state ={
    data:[]
  }
  fetchData = async()=>{
    const response= await etch('http://172.21.201.23:8080/api/tutorials')
    const tutorials = await response.json()
    this.setState({data:tutorials})
  }
  componentDidMount(){
    this.fetchData()
  }
render(){

  return(
    <View>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
    </View>
  )
}
}
export default TutoList
