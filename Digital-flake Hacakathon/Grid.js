import React  from "react";
import{Text, View,StyleSheet} from "react-native"
import './Login.js';
const Grid = () => {
return(
<Text Style >Co-working</Text>
<View style={{flex:1 , flexDirection:'row', flexWrap:'wrap'}} >
<Text style = {styles.item}>Book Work Station</Text>
<Text style = {styles.item}>Meeting Room</Text>
</View>

);
};

const styles = StyleSheet.create({
Style:{
    position: absolute,
    width: 85,
    height: 20,
    left: calc(50% - 85/2 - 88.5),
    top: 67,
    fontfamily: 'Poppins',
    fontstyle: normal,
    fontweight: 700,
    fontsize: 14,
    lineheight: 20,
    textalign: center,
    letterspacing: -0.24,
     color: '#534F4F',  
},
item:{
    position: absolute,
    width: 147,
    height: 147,
    left: 25,
    top: 149,
    background: '#4D60D1',
    borderradius: 15,
},
});