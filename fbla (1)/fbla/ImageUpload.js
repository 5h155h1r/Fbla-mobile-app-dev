import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper'
import { launchImageLibrary } from 'react-native-image-picker'

export default function  Image () {
  
    const uploadImage = () => {
        let settings = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
        }

        launchImageLibrary(settings, rep => {
            SetPic(rep.assets[0].base64)
        })
    }


    const [Pic, SetPic] = React.useState('');
    return (
      <View>
        <View>
            <Avatar.Image
                size={250}
                source={{uri: 'data:image/png;base64' + Pic}}
            />
        </View>
        <View>
            <TouchableOpacity onPress ={ ()=> uploadImage()}>
                <Text>Upload Image</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    );
  }


