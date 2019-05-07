import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const win = Dimensions.get('window')
const w = win.width
const h = win.height

const ImageCard = ({ data, onPress }) => {
    const { h1, img, container, sub } = styles
    const { id, name, image } = data
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={container} key={id}>
                <View style={sub}>
                    <Image style={img} source={{uri: image}}  />
                </View>
                <Text style={h1}>{ name.toUpperCase() }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: w / 2.4,
        backgroundColor: 'white',
        paddingVertical: 10
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4
    },
    h1: {
        paddingTop: 10,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center'
    },
    img: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    }
})

export default ImageCard