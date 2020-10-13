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


 class TutoList extends React.Component {

  constructor(props){
    super(props);{

      this.state = {
        title_input: '',
        description_input: ''
      }
    }
  };
//affichage api test
  state ={
    data:[]
  };
  fetchData = async()=>{
    const response= await fetch('http://172.21.201.23:8080/api/tutorials')
    const tutorials = await response.json()
    this.setState({data:tutorials})
  };

  fetchPost = () => {
    fetch('http://172.21.201.23:8080/api/tutorials',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title: this.state.title_input,
        description: this.state.description_input
      })
    }).then((response)=>response.json())
      .then((responseJson)=>{

      }).catch((error)=>{console.error(error);});
  };

  // displayTuto = (idtuto) => {
  //   this.props.navigation.navigate('EditTuto', {idtuto: idtuto})
  // }

  componentDidMount(){
    this.fetchData()
  };

  render(){
    const { navigation } = this.props
  return(
    <View>
    <FlatList
         data={this.state.data}
         keyExtractor={(item,index) => index.toString()}
         renderItem={({item}) =>
         <View>
           <TouchableOpacity
           style={{ backgroundColor: 'yellow', borderWidth: 1 }}
           onPress={() => {
           /* 1. Navigate to the Details route with params */
           navigation.navigate('Edit', {
             itemId: item.id,
             title: item.title,
             description : item.description,
           });
         }}>
           <Text>{item.title}</Text></TouchableOpacity>
           <Text>{item.description}</Text>


           </View>}
       />
       <View>
       <TextInput
       placeholder= 'title'
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({title_input: text})}

    />
       <TextInput
       placeholder= 'description'
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({description_input: text})}

    />

    <Button title='submit' onPress={this.fetchPost}/>
       </View>
    </View>
  )
}
}
export default TutoList
