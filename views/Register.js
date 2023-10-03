import {React, useState} from 'react';
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {RegisterStyle} from '../styles/Register'

import * as ImagePicker from 'expo-image-picker';

export default function Register() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null); 


    const handleSignUpPressLogin = () => {
        navigation.navigate('Login');
    };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={RegisterStyle.container}>

  <View style={RegisterStyle.secondSection}>

      <View>

      <View style={RegisterStyle.imageAndText}>

          <View style={RegisterStyle.textContainer}>
            <Text style={RegisterStyle.signupTop}>Sing up for a</Text>
            <Text style={RegisterStyle.signupBottom}>new account.</Text>
            <Text style={RegisterStyle.subTittle}>We just need some more information</Text>
          </View>

          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={RegisterStyle.circularImage} />
          )}
        </View>
      
      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Name</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="Charly" 
              returnKeyType="next"
          />  
      </View>

      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Email Address</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="ejemplo@ejemplo.com" 
              keyboardType="email-address"
              returnKeyType="next"
          />  
      </View>


      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="*******" 
              secureTextEntry={true}
          />
      </View>

      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="Confirm Password" 
              secureTextEntry={true}
          />
      </View>

      <TouchableOpacity style={RegisterStyle.buttonImage} onPress={selectImage}>
            <Text style={RegisterStyle.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>

      <View style={RegisterStyle.spacing}>
          <TouchableOpacity style={RegisterStyle.button}>
                  <Text style={RegisterStyle.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>

    </View>

  <View style={[RegisterStyle.spacing, RegisterStyle.row]}>
    <Text style={RegisterStyle.label}>Already have an account?</Text>
    <TouchableOpacity onPress={handleSignUpPressLogin}>
        <Text style={RegisterStyle.login}>Login</Text>
    </TouchableOpacity>
  </View>

  </View>

    </SafeAreaView>

  );
}

