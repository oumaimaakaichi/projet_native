import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
//import {AuthContext} from '../contexte/AuthContext';
const Register = () => { 
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState('');
  const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const[Role , setRole]=useState('')
  //  const {isLoading, register} = useContext(AuthContext);
  async function Add(){

    
      let item = {Nom_station , type_lavage , email ,ville , adresse, password , longitude , latitude , Role }
    
      let result = await fetch(process.env.REACT_Native_URL+"/register" , {
          method: 'POST',
          body:JSON.stringify(item),
          headers:{
              "Content-Type" : 'application/json',
              "Accept" : 'application/json'
          }
        
      })
     
      result = await result.json();
      if(result){
        console.log(item)
      }
      
     
  }
  
  
  
  return (
      <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView style={styles.scrollView}>
    <ImageBackground  style={styles.backgroundContainer}>
      <View >
     
      </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom station'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setNom_station(e.target.value)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Type lavage'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setType_lavage(e.target.value)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Ville'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setVille(e.target.value)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Adresse'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setAdresse(e.target.value)}
        />
    </View>
    <View  >
    <TextInput 
        style={styles.input}
        placeholder={'Role'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setRole(e.target.value)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'logitude'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setLongitude(e.target.value)}
        />
    </View>
    <View  >
     
     
     <TextInput 
      style={styles.input}
      placeholder={'latitude'}
      placeholderTextColor={'black'}
      underLineColorAndroid='transparent'
      onChange={(e)=>setLatitude(e.target.value)}
      />
  </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        onChange={(e)=>setEmail(e.target.value)}
        />
    </View>
    <View style={{
      
      flexDirection: "row",
      left:15
    }}>
       
        <TextInput 
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={'black'}
       
        underLineColorAndroid='black'
        onChange={(e)=>setPassword(e.target.value)}
        />
        
        
        
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => {
            Add();
          }}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
    </ImageBackground> 
       
        
    </ScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginVertical: 80,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 25

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  }
});
export default Register;