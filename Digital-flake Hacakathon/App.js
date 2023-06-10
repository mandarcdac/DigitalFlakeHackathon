import React, {useState} from "react";
import{Text, View,StyleSheet,Button} from "react-native";
import "./Login.js";
const App =(props) => {
const [agree, setAgree] = useState(false)
return(
<View style = {styles.mainContainer}>
<Text style = {styles.mainHeader}>Create an Account </Text>
</View>
<View style = {styles.inputContainer}>
<Text style = {styles.labels}>Full Name</Text>
<TextInput style = {styles.inputStyle}
autoCapitalize="none"
autoCorrect={false}/>
</View>

<View style = {styles.inputContainer}>
<Text style = {styles.labels}>Enter Mobile Number</Text>
<TextInput style = {styles.inputStyle} />
</View>

<View style = {styles.inputContainer}>
<Text style = {styles.labels}>Enter the EmailId</Text>
<TextInput style = {styles.inputStyle}
autoCapitalize="none"
autoCorrect={false} />
</View>

<View style = {{marginBottom: 200}}>
<Btn textColor= 'white' bgColor={Blue} btnLabel="Create an Account" Press={() => alert}  />
<View style = {{display: 'flex',flexDirection:"row",justifyContent:"center"}}></View>
<Text style = {{fontSize:16, fontWeight:"bold"}}>ExistingUser?</Text>
<TouchableOpacity onPress = {() =>props.navigation.navigate("Login")}>
<Text> = {{color: blue fontWeight:'bold',fontsize: 16 }}Log In </Text>
</TouchableOpacity>
</View>

);}; 

const styles = StyleSheet.create({
mainHeader:{
    position: absolute,
width: 223,
height: 20,
left: calc(50% - 223/2 - 41.5),
top: 90,

font_family: 'Poppins',
font_style: normal,
font_weight: 400,
font_size: 24,
line_height: 20,
text_align: center,
letter_spacing: -0.24,
color: '#000000',

}   , 
labels:{
    position: absolute,
    width: 76,
    height: 20,
    left: 24,
    top: 168,   
    font_family: 'Poppins',
    font_style: "normal",
    font_weight: 400,
    font_size: 16,
    line_height: 20,
    text_align: center,
    letter_spacing: -0.24,
    color: '#494949',
},

inputStyle: {
    box_sizing: border_box,
    position: absolute,
    width: 312,
    height: 56,
    left: 24,
    top: 308,
    background: '#F9F9F9',
    border: '1 solid #DADADA',
    border_radius: 10,
}
});


export default App;