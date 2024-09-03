import React from   'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style'


export default function Header(){

    return(
            <View style = {styles.viewHeader}>
                
                <Text style={styles.textHeader}>   ATORES  </Text>
            
            </View>
    );

}