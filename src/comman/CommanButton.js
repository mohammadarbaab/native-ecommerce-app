import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-gesture-handler'

function CommanButton({ onPress, title, bgColor, textColor }) {
    return (
        <TouchableOpacity
        style={{
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            height: 50,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 50,
        }}
        onPress={onPress} 
    >
        <Text style={{ color: textColor, fontSize: 18, fontWeight: '600' }}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}

export default CommanButton