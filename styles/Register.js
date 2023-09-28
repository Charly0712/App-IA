import {  StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
      },
      secondSection:{
        flex:1,
        backgroundColor:"white", 
        width: "100%",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        padding:20,
        justifyContent: "space-between"
      },
      label:{
        color: "#ccc"
      },
      textInput:{
        color: "#000",
        padding: 8,
        borderBottomWidth: 1.5, // Ajusta el grosor del subrayado aquí
        borderColor: "#C43FB0", // Cambia el color del subrayado aquí
      },
      spacing:{
        marginTop:30,
      },
      button:{
        backgroundColor: "#C43FB0",
        padding: 15,
        borderRadius:30,
        alignItems: "center",
        textAlign: "center",
      },
      buttonText:{
        fontSize:20,
        color: "white",
        fontWeight: "bold",
      },
      row:{
        flexDirection:"row",
        justifyContent:"center",
    
      },
    
    login:{
        color: "#C43FB0",
        paddingLeft:5,
      },
      signupTop: {
        fontSize:30,
        color: "#000",
        textAlign: "left",
      },
    
      signupBottom: {
        fontSize:30,
          color: "#000",
          textAlign: "left",
      },
      subTittle:{
        fontSize : 12 ,
        color: "#ccc"
      }
})