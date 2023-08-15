import React from 'react';
import {  View, Text, StyleSheet, } from 'react-native';


const Display=({route})=>{
return(
<View>


<Text style={styles.Text}>Name:   {route.params.name} </Text>
<Text style={styles.Text}>Email:   {route.params.email} </Text>
<Text style={styles.Text}>Country:   {route.params.country} </Text>
<Text style={styles.Text}>Gender:   {route.params.gender}</Text>
<Text style={styles.Text}>Subjects:   {route.params.Phy}{route.params.chem}{route.params.bio}</Text>
<Text style={styles.Text}>Skills:   {route.params.skills}</Text>
<Text style={styles.Text}>Address:   {route.params.address}</Text>

</View>)


}
export{Display};
const styles = StyleSheet.create({
    Text: {
        marginTop:40,
        fontSize: 20,
        backgroundColor:"lightblue",
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding:5 ,

    }

   

})