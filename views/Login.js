import { SafeAreaView, StyleSheet, Image, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import {React, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {LoginStyle} from '../styles/Login';

import appFirebase from  '../crendeciales/enviroments';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(appFirebase);



const Login = (props) => {

    //Variables de estado
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async()=>{
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesión', 'Accediendo..')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }

    const navigation = useNavigation();

    // Función para manejar la navegación a la pantalla de Registro
    const handleSignUpPress = () => {
        navigation.navigate('Registro');
    };

  return (
    <SafeAreaView style={LoginStyle.container}>

        {/* PRIMERA SECCIÓN */}

        <View style={LoginStyle.firstSection}>
            <Image
                source={
                    require('../images/Login4-01.jpg')
                }
                style={{width: "100%", height: "120%", resizeMode: "cover", opacity: 0.5 }}
            />
            <View 
            style={{
                position: "absolute"
            }}
            >
                <Text style={LoginStyle.tittle}> Trevelo </Text>
            </View>
        </View>

        {/* SEGUNDA SECCIÓN */}

        <View style={LoginStyle.secondSection}>

            <View>
                <View style={LoginStyle.spacing}>
                    <Text style={LoginStyle.label} >Email Address</Text>
                    <TextInput 
                        style={LoginStyle.textInput}
                        underlineColorAndroid={"transparent"}
                        placeholder="ejemplo@ejemplo.com" 
                        keyboardType="email-address"
                        returnKeyType="next"
                        onChangeText={(text) =>setEmail(text)}
                    />  
                </View>


                <View style={LoginStyle.spacing}>
                    <Text style={LoginStyle.label} >Password</Text>
                    <TextInput 
                        style={LoginStyle.textInput}
                        underlineColorAndroid={"transparent"}
                        placeholder="*******" 
                        secureTextEntry={true}
                        onChangeText={(text)=> setPassword(text)}
                    />
                </View>

                <View style={LoginStyle.spacing}>
                    <Text style={LoginStyle.forgotPassword} >Forgot Password</Text>   
                </View>  

                <View style={LoginStyle.spacing}>
                    <TouchableOpacity style={LoginStyle.button} onPress={logueo}>
                            <Text style={LoginStyle.buttonText}>Login</Text>
                    </TouchableOpacity>
                 </View>
           </View>

           <View style={[LoginStyle.spacing, LoginStyle.row]}>
                <Text style={LoginStyle.label}>Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUpPress}>
                    <Text style={LoginStyle.signUp}>Sing Up</Text>    
                </TouchableOpacity>  
            </View>  
        </View>

    </SafeAreaView>
  )
}

export default Login

