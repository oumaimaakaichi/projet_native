import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Linking, ImageBackground , Image , TextInput ,Dimensions,ScrollView , SafeAreaView, TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'

import {  input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import Register from './inscri';

export default class Login extends Component{
    constructor(){
        super()
        this.state={
          showPass:true,
          press:false
        }
      }
      showPass=()=>{
        if(this.state.press==false){
          this.setState({showPass:false , press:true})
        }
        else{
          this.setState({showPass:true , press:false})
        }
      }
  render(){
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={styles.scrollView}>
    <ImageBackground  style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo}  style={styles.logo}/>
       
      </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>
    <View style={{
      
      flexDirection: "row"
    }}>
       
        <TextInput 
        style={styles.input1}
        placeholder={'Password'}
        placeholderTextColor={'black'}
        secureTextEntry={this.state.showPass}
        underLineColorAndroid='black'
        
        />
        
        <TouchableOpacity style={styles.btnEye}
        onPress={this.showPass.bind(this)}
        >
          <Icon name={this.state.press==false?'ios-eye-outline':'ios-eye-off-outline'} size={26} color={'black'}/>
        </TouchableOpacity>
        
      </View>
      <View>
        <Text onPress={() =>
            this.props.navigation.navigate('Register')}>Create Account</Text>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
       <Text style={styles.TextBtn}>Login</Text>

      </TouchableOpacity>
    </ImageBackground> 
    </ScrollView>
        </SafeAreaView>
     
      
   
  );
}
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: WIDTH,
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
    width:WIDTH-10,
    height:45,
    marginTop:10,
    marginBottom:20,
    borderRadius:25,
    fontSize:16,
    paddingLeft:35,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 25

  },
  input1:{
    width:WIDTH-10,
    height:45,
    marginTop:10,
    marginBottom:20,
    borderRadius:25,
    fontSize:16,
    paddingLeft:35,
    backgroundColor: '#f5f5f5',
    color: 'black',
  
    marginStart:20

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

  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  }
});
