import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { Text, TextInput } from 'react-native-gesture-handler'

function CustomTextInput({ value, onChangeText, placeholder, icon, type, keyboardType }) {
    return (
        <View style={{ alignSelf: 'center', paddingLeft: 20, width: "85%", height: 50, borderRadius: 10, borderWidth: 0.5, alignSelf: 'center', marginTop: 30, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Image source={icon} style={{ width: 20, height: 20 }} />
            <TextInput keyboardType={keyboardType ? keyboardType : "default"} placeholder={placeholder} style={{ marginLeft: 10 }}
                secureTextEntry={type ? true : false} value={value} onChangeText={txt => {
                    onChangeText(txt)
                }} />
        </View>
    )
}

export default CustomTextInput