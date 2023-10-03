import {  StyleSheet } from 'react-native'


export const HomeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    fontSize: 40,
    backgroundColor: "#C43FB0",
    padding: 15,
    borderRadius:30,
    alignItems: "center",
    textAlign: "center",
    },
    buttonContainer: {
      width: 200,
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin:15
    },
    imageContainer: {
      marginTop: 20,
    },
    circularImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      resizeMode: 'cover',
    },
})