import React, { useState } from 'react';
import {  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import SelectBox from 'react-native-multi-selectbox'
import MultiSelect from 'react-native-multiple-select';



const items = [
  {id: "Typing", name: 'Typing'},{id: "Gardening", name: 'Gardening'},{id: "Reading", name: 'Reading'},{id: "Playing", name: 'Playing'},{id: "Gaming", name: 'Gaming'}];





const country = 
[{item: 'Pakistan',id: 'Pakistan'},{item: 'India',id: 'India'},{ item: 'China',id: 'China', }]
   
  
  
function Form({ navigation,route }) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Gender, setGender] = useState('');
    const [selectedcountry, setSelectedcountry] = useState({});
    const [Phy, setphy] = useState(false);
    const [chem, setchem] = useState(false);
    const [bio, setbio] = useState(false);
    const [Address, setAddress] = useState();
    const [skills, setskills] = useState();
    const [selectedItems, setSelectedItems] = useState([]);



    const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };


    const Subjects = () => {
        if (Phy === true) {
            setphy("Phy");
        }
        if (chem === true) {
            setchem("Chem");
        }
        if (bio === true) {
            setbio("Bio");
        }
        navigation.navigate('Display',{
            email:email,
            name:name,
            gender:Gender,
            country:selectedcountry.id,
            Phy:Phy,
            chem:chem,
            bio:bio,
            skills:selectedItems,
            address:Address


        })

    }


    function onChange() {
        return (val) => setSelectedcountry(val)
    }

    

   
       
    

    return (
        <ScrollView >


            <View style={styles.container}>
                <Text style={styles.Text} >Name: </Text>
                <TextInput style={styles.TextInput}
                    onChangeText={(text) => setname(text)}>
                </TextInput>
            </View>
            <View style={styles.container}>
                <Text style={styles.Text} >Email: </Text>
                <TextInput style={styles.TextInput}
                    onChangeText={(text) => 
                    setemail(text)}>
                </TextInput>
            </View>



            <View style={styles.container}>
                <Text style={[styles.Text, { marginTop: 20 }]}> Country:  </Text>
                <SelectBox
                    width="70%"
                    label="Select Your Country"
                    options={country}
                    value={selectedcountry}
                    onChange={onChange()}
                    hideInputFilter={false}
                    arrowIconColor="skyblue"

                />

            </View>


            <View style={styles.container}>
                <Text style={[styles.Text, { marginTop: 3 }]}>Gender:                    </Text>
                <RadioButton
                    value="male"
                    status={Gender === 'Male' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('Male')}
                />
                <Text style={{ marginTop: 10 }}>Male</Text>
                <RadioButton
                    value="female"
                    status={Gender === 'Female' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('Female')}
                />
                <Text style={{ marginTop: 10 }}>Female</Text>
            </View>

            <Text style={styles.Text}>    Subjects:           </Text>

            <View style={styles.container}>

                <CheckBox title='Phy' size={20} checked={Phy} onPress={
                    () => { setphy(!Phy) }
                } />
                <CheckBox title='Chem' size={20} checked={chem} onPress={
                    () => { setchem(!chem) }
                } />
                <CheckBox title='Bio' size={20} checked={bio} onPress={
                    () => { setbio(!bio) }
                } />
            </View>


{/*
            <View style={styles.container}>
                <Text style={styles.Text} >Skills:     </Text>
                <TextInput  style={styles.TextInput}
                    onChangeText={(text) => setskills(text)}>
                </TextInput>
            </View>




*/}
            <View style={styles.skillsrow}>
            <Text style={{color:"black",fontSize:15}}>Select Your Skills
            <MultiSelect style={styles.multiselect}
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Skills"
          onChangeInput={(text) => setSelectedItems(text)}
            />
            </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.Text} >Address: </Text>
                <TextInput style={styles.TextInput}
                    onChangeText={(text) => setAddress(text)}>
                </TextInput>
            </View>




            <View style={styles.container}>

                <TouchableOpacity style={{ backgroundColor:'skyblue', alignItems:"center",justifyContent: 'center',paddingHorizontal:40,marginTop:10,marginLeft:80}} 
                onPress={ ()=>{Subjects()}}
                >
                 <Text style={{color:"black",fontWeight:"bold",color:"blue"}}> Submit</Text>
                 

                </TouchableOpacity>
            </View>








        </ScrollView >
    );
}
export { Form };
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      
        marginTop: 10,
        marginBottom:20,

    },

    TextInput: {
        borderRadius: 1,
        borderColor: "skyblue",
        borderWidth: 1,
        width: 250
    },

    Text: {
        fontSize: 15,
        backgroundColor:"lightblue",
        height: 50,
        width:100,
        margin: 12,
        borderWidth: 0,
        padding:5 ,

    },
    

})