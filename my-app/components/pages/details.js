import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'

const win = Dimensions.get('window')
const w = win.width
const h = win.height

class DetailsScreen extends PureComponent {

    render() {
        const { image, name, summary } = this.props.navigation.state.params
        return(
            <View style={styles.container}>
                <ScrollView style={styles.bgWhite}>
                    <View style={styles.sub}>
                        <Image style={styles.img} source={{uri: image.medium}}  />
                        <Text style={styles.h1}>{name.toUpperCase()}</Text>
                        <Text style={styles.parag}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white'
    },
    bgWhite: {
        backgroundColor: 'white'
    },  
    img: {
        width: w / 1.9,
        height: w * 0.80,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 120,
        backgroundColor: 'white'
    },
    h1: {
        fontSize: 24,
        padding: 15,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    parag: {
        fontSize: 15,
        padding: 15,
        backgroundColor: 'white',
        color: 'gray',
        paddingHorizontal: 10,
    }
})


export default DetailsScreen