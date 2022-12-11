import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import db from './config';
import firebase from 'firebase';
import pic from './icon.jpg';

//Components

//JSX - JS and HTML/XML

//props - help you to pass values between components or classes
//states - help you to store values
//json
//this.setState({name:'Jasmeen'})

//Component Lifecycle:
// Mounting Updating Unmounting

//functional components

//Main axis - justifyContent
//Cross axis - alignItems

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
    };
  }

  logIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Logged In');
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <Image
              source={pic}
              style={{
                width: '80%',
                height: 200,
                alignSelf: 'center',
                marginTop: '20%',
                borderRadius: 20,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 50,
                marginLeft: '10%',
              }}>
              Login
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <FontAwesome name="at" size={20} color="gray" />
              <TextInput
                style={{
                  width: '90%',
                  paddingLeft: 20,
                  height: 30,
                  color: 'black',
                }}
                placeholder="Email ID"
                placeholderTextColor="black"
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
              <Feather name="lock" size={20} color="gray" />
              <TextInput
                style={{
                  width: '70%',
                  paddingLeft: 20,
                  height: 30,
                  color: 'black',
                }}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry
                onChangeText={(val) => {
                  this.setState({ pwd: val });
                }}
              />
              <Text style={{ color: 'orange', fontWeight: 'bold' }}>
                Forgot?
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: 'orange',
                width: '80%',
                alignSelf: 'center',
                height: 40,
                marginTop: 30,
                justifyContent: 'center',
                borderColor: 'orange',
              }}
              onPress={() => {
                if (this.state.email && this.state.pwd) {
                  this.logIn(this.state.email, this.state.pwd);
                } else {
                  alert('Please fill all fields');
                }
                this.props.navigation.navigate('Order');
              }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
                Login
              </Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', color: 'grey', marginTop: 30 }}>
              Or, login with..
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: '30%',
                  borderRadius: 5,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://image.similarpng.com/thumbnail/2020/12/Google-logo-design-clipart-PNG.png',
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: '30%',
                  borderRadius: 5,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png',
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: '30%',
                  borderRadius: 5,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              New to THE APP?{' '}
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}>
                <Text
                  style={{
                    color: 'orange',
                    fontWeight: 'bold',
                    paddingBottom: 30,
                  }}>
                  {' '}
                  Register!{' '}
                </Text>
              </TouchableOpacity>
            </Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
