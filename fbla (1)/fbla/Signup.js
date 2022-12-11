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
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import db from './config';
import firebase from 'firebase';
import { FontAwesome5 } from '@expo/vector-icons';
import pic from './icon.jpg';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      name: '',
      city: '',
      confirmPwd: '',
    };
  }

  Signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.pwd);
    console.log('1');
    db.collection('users').add({
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
    });
    console.log('2');
    Alert.alert('User Added Succesfully');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
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
              marginTop: 35,
              marginLeft: '10%',
            }}>
            Sign up
          </Text>

          <TouchableOpacity
            onPress = {()=>{
              this.props.navigation.navigate("Login")
            }}
          >
            <Text style={{ textAlign: 'center', color: 'blue', marginTop: 30 }}>
              Or, login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              marginTop: 60,
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

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: '80%',
              alignSelf: 'center',
              marginTop: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name="at" size={20} color="grey" />
            <TextInput
              style={{ width: '90%', paddingLeft: 20, height: 30 }}
              placeholder="Email ID"
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
              marginTop: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="lock" size={20} color="grey" />
            <TextInput
              style={{ width: '90%', paddingLeft: 20, height: 30 }}
              placeholder="Password"
              secureTextEntry
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: '80%',
              alignSelf: 'center',
              marginTop: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
           <Feather name="lock" size={20} color="grey" />
            <TextInput
              style={{ width: '90%', paddingLeft: 20, height: 30 }}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={(val) => {
                this.setState({ confirmPwd: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: '80%',
              alignSelf: 'center',
              marginTop: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="person-outline" size={20} color="grey" />
            <TextInput
              style={{ width: '90%', paddingLeft: 20, height: 30 }}
              placeholder="Full Name"
              onChangeText={(val) => {
                this.setState({ name: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: '80%',
              alignSelf: 'center',
              marginTop: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
           <FontAwesome5 name="school" size={24} color="grey" />
            <TextInput
              style={{ width: '90%', paddingLeft: 20, height: 30 }}
              placeholder="School"
              onChangeText={(val) => {
                this.setState({ city: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: 'blue',
              width: '80%',
              alignSelf: 'center',
              height: 40,
              marginTop: 30,
              justifyContent: 'center',
              borderColor: 'blue',
            }}
            onPress={() => {
              this.Signup();
              console.log('HEHEEH');
            }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
