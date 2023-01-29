/* Ian McManus
757299
1/29/2023
Calculate the cost of a certain number of tickets at a 
rate of $99.99 per ticket */


import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, Button, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const TicketVault = () => {
  //Splashscreen logic
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [text, setText] = useState('');
  var [textBox, setTextBox] = useState(false);
  
  return(
    <><View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textBox}
          placeholder='Number of Tickets'
          onChangeText={newText => setText(newText)}
          defaultValue={null}
          keyboardType={'default'} />
      </View>
      <Pressable style={styles.buttonContainer}>
        <Button color='#000000' title="Find The Cost" onPress={() => setTextBox(true)} />
      </Pressable>
      {textBox ? <Text style={styles.price}>Ticket Cost: ${(text * 99.99).toFixed(2)}</Text> : null}
    </View>
    <View style={styles.pics}>
      <Image style={styles.pics} source={require('./assets/concert.png')} />
    </View></>
    );
};

export default TicketVault;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 100,
  },
  title: {
    paddingTop: 100,
    textAlign: 'center',
    fontSize: 60,
  },
  textBox: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    fontSize: 43,
    width: '80%',
  },
  inputContainer: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#f98b88',
    height: 40,
    width: '40%',
    color: '#000000',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    fontSize: 20,
    alignContent: 'center',
  },
  price: {
    fontSize: 40,
    paddingTop: 50,
  },
  pics: {
    width:'100%',
    paddingBottom: 100,
  },
});
