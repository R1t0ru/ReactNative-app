import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colorA from '../(tabs)/_layout'



// const SomeData = [{
//     id: "01",
//     title:"HeartProject"
// },
// {
//     id: "02",
//     title:"HappyLife"
// }];

export default function DonationsScreen() {

  const[inputValue, setInputValue] = useState("");
  const[formList, setFormList] = useState([]);
  const[editedForm, setEditedForm] = useState(null);

  const handleAddForm = ()=>{
    // {
    //     id:
    //     title:
    // }
    if (inputValue.trim() !== "" && inputValue.length <36) {
    setFormList([...formList, {id: Date.now().toString(), title: inputValue}]);
    setInputValue("");        
    } else {
        alert('No blank or +36 char phrase allowed');
    };
  };

  const handleUpdateForm = ()=>{
    const updatedForm = formList.map((item)=>{

        if(item.id === editedForm.id){
            return {...item, title: inputValue}
        }

        return item;
    });
        setFormList(updatedForm);
        setEditedForm(null);
        setInputValue("");
        
    };

  const handleModifyForm = (form)=>{
    setEditedForm(form);
    setInputValue(form.title);
  }

  const handleDeleteForm = (id)=>{

    const updatedFormList = formList.filter((form)=>form.id !== id);

    setFormList(updatedFormList);
  };
 

  const renderForm = ({item, index})=>{
    return(
        <View style={styles.formResult}>
            <Text style={styles.formResultText}>{item.title}</Text>
            <MaterialCommunityIcons name="pencil" color={colorA} style={styles.formResultIcon} onPress={()=>handleModifyForm(item)}/>
            <MaterialCommunityIcons name="trash-can" color={colorA} style={styles.formResultIcon} onPress={()=>handleDeleteForm(item.id)}/>
        </View>
    )
}
  return (
    // <ScrollView >
    <View style={styles.container}>
    <Text style={styles.label}>
        Créez et listez vos projets
    </Text>
    <TextInput
      style={styles.input}
      value={inputValue}
      placeholder="Entrez le nom de votre bonne action/projet"
      keyboardType="text"
      onChangeText={(formText)=> setInputValue(formText)}
    />

    {
        editedForm ?(
        <TouchableOpacity style={styles.button} onPress={()=> handleUpdateForm()}>  
        <Text style={styles.buttonText}>Modifier</Text>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={styles.button} onPress={()=> handleAddForm()}>  
        <Text style={styles.buttonText}>Créer</Text>
        </TouchableOpacity>
        )
    }

    {/* <TouchableOpacity style={styles.button} onPress={()=> handleAddForm()}>  
      <Text style={styles.buttonText}>Créer</Text>
    </TouchableOpacity> */}
    <FlatList data={formList} renderItem={renderForm}/>

  </View>
//   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 15,
      color: '#333',
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#e4b3bb',
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 16,
      color: '#000',
      backgroundColor: '#fff',
      margin: 10,
      paddingLeft:10,
      paddingRight:10,
    },

    formResult: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#e4b3bb',
        color:'#000',
    },

    formResultText:{
        width: '70%',
        fontWeight: 'bold',
    },

    formResultIcon:{
        textAlign: 'right',
        width: '15%',
        fontSize: 16,
    },

    error: {
      marginTop: 5,
      fontSize: 14,
      color: 'red',
    },
  
    button: {
      width: '50%',
      backgroundColor: '#111111',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 100,
      width: '80vw',
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
  });