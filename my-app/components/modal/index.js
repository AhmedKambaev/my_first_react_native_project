import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native';


const Modal = ({isModalVisible, _toggleModal}) => {
    if(isModalVisible)
        return(
            <View style={styles.container} style={{flex: 1}} onClick={() => _toggleModal(false)}>
                <ScrollView style={styles.modal}>
                    <Text>Modal</Text>
                </ScrollView>
            </View>
        );

    return null;
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    modal: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 4,
        flex: 1
    }
});

export default Modal;