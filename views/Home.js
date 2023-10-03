import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { HomeStyles } from '../styles/Home';


export function Home() {
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("¡Te has negado a permitir que esta aplicación acceda a tus fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, // Habilita la edición
      quality: 1,
    });

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("¡Te has negado a permitir que esta aplicación acceda a tu cámara!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Habilita la edición
      quality: 1,
    });

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  return (
    <View style={HomeStyles.screen}>
      <View style={HomeStyles.buttonContainer}>
        <TouchableOpacity style={HomeStyles.button} onPress={showImagePicker}>
          <Text>Seleccionar Imagen</Text>
        </TouchableOpacity>
      </View>

      <View style={HomeStyles.buttonContainer}>
      <TouchableOpacity style={HomeStyles.button} onPress={openCamera}>
          <Text>Tomar Fotografía</Text>
      </TouchableOpacity>
      </View>

      <View style={HomeStyles.imageContainer}>
        {pickedImagePath !== '' && (
          <Image
            source={{ uri: pickedImagePath }}
            style={HomeStyles.circularImage}
          />
        )}
      </View>
    </View>
  );
}

export default Home;
