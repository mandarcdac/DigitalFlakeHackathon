import React, {useState} from "react";
import{Text, View,StyleSheet,buttonStyle} from "react-native";
import "./App.js";

const Login =(props) => {
const [agree, setAgree] = useState(false)
return(
<View style = {styles.mainContainer}>
<Text style = {styles.mainHeader}>Co-Working</Text>
</View>
<View style = {styles.inputContainer}>
<Text style = {styles.labels}>Enter the Mobile number or Email</Text>
<TextInput style = {styles.inputStyle}/>
</View>


<View style = {styles.inputContainer}>
<Text style = {styles.labels}>Enter the Password</Text>
<TextInput style = {styles.inputStyle}
autoCapitalize="none"
autoCorrect={false}
secureTextEntry = {true}/>
</View>

<View style = {{marginBottom: 200}}>
<Btn textColor= 'white' bgColor={Blue} btnLabel="Login" Press={() => alert}  />
<View style = {{display: 'flex',flexDirection:"row",justifyContent:"center"}}></View>
<Text style = {{fontSize:16, fontWeight:"bold"}}>Newuser?</Text>
<TouchableOpacity onPress = {() =>props.navigation.navigate("Create an  account")}>
<Text> = {{color: blue fontWeight:'bold',fontsize: 16 }}Log In </Text>
</TouchableOpacity>
</View>

)};

const styles = StyleSheet.create({
mainHeader: {
    position: absolute,
    width: 139,
    height: 20,
    left: calc(50% - 139/2 + 0.5),
    top: 147,
    font_family: 'Poppins',
    font_style: "normal",
    font_weight: 400,
    font_size: 24,
    line_height: 20,
    text_align: center,
    letter_spacing: -0.24,
    color: '#000000',
},

inputStyle:{
    box_sizing: border_box,
    position: absolute,
    width: 312,
    height: 56,
    left: 24,
    top: 288,
    background: '#F9F9F9',
    border: '1px solid #DADADA',
    border_radius: 10,
},
labels:{
    position: absolute,
    width: 184,
    height: 20,
    left: 24,
    top: 258,
    font_family: 'Poppins',
    font_style: normal,
    font_weight: 400,
    font_size: 16,
    line_height: 20,   
    text_align: center,
    letterspacing: -0.24,
    color: '#494949',
}
});
export default Login;