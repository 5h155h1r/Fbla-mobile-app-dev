import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MainStack from './Navigation'


export default class Absence extends React.Component {
  render() {
    return (
      <View>
            <TouchableOpacity onPress ={()=>alert("Your child has been marked absent")} style={{}}>
                <Text>Mark Absent</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

