import React from 'react'
import { StyleSheet, View, Text,TextInput,Button } from 'react-native'

class EditTuto extends React.Component {

  constructor(props){
    super(props);{

      this.state = {

        title:'',
        descritption:'',
        tuto_id:'',
        title_input: '',
        description_input: '',
      }
    }
  };

  fetchPut = () => {
    const { route , navigation} = this.props;
    const { itemId, title, description } = route.params;
    fetch('http://172.21.201.23:8080/api/tutorials/'+ itemId,{
      method: 'PUT',
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


  render() {
    const { route , navigation} = this.props;
    const { itemId, title, description } = route.params;
    return (
      <View >
        <Text>{JSON.stringify(itemId)}</Text>
        <TextInput
        placeholder  = 'title'
       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={title => this.setState({title_input: title})}
       value = {title}

     />
        <TextInput
        placeholder= 'description'
       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({description_input: text})}
       value = {description}

     />

     <Button title='submit' onPress={this.fetchPut}/>

      </View>
    )
  }
}


export default EditTuto
