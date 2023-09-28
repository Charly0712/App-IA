import { StyleSheet } from 'react-native';


export const LoginStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        alignItems: "center",
        justifyContent: "center"
    },

    firstSection:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"black",
        width: "100%", 


    },

    secondSection:{
        flex:2,
        backgroundColor:"white", 
        width: "100%",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        padding:20,
        justifyContent:"space-between"
    },

    tittle:{
        fontSize:48,
        color: "white",
    },

    label:{
        color: "#ccc"
    },

    textInput:{
        color: "#000",
        padding: 8,
        borderBottomWidth: 1.5, 
        borderColor: "#C43FB0", 
    },

    forgotPassword:{
        color: "#000",
        textAlign: "right"
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

    spacing:{
        marginTop:30,
    },

    row:{
        flexDirection:"row",
        justifyContent:"center"    
    },
    
    signUp:{
        color: "#C43FB0",
        paddingLeft:5,
    }
})