import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import ImageCard from '../imageCard'
import { STARGATE_DETAILS } from '../router';

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'



export default class HomeScreen extends React.Component {
    state = {
      isModalVisible: false,
      data: []
    }


    componentDidMount = async() => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({data: data})
      } catch(e) {
        throw e
      }
    }

    _toggleModal = (status) =>
        this.setState({ isModalVisible: status })


    render() {
      const { data } = this.state
      const { navigation } = this.props
      return (
        <View style={styles.application_container}>
          <View style={styles.application_container}>
            <Toolbar style={styles.application_container}
                leftElement="menu"
                centerElement="Searchable"
                searchable={{
                  autoFocus: true,
                  placeholder: 'Search',
                }}
                rightElement={{
                    menu: {
                        icon: "more-vert",
                        labels: ["item 1", "item 2"]
                    }
                }}
                onLeftElementPress={ (label) => { this._toggleModal(true) }}
              />
          </View>
          <ScrollView>
            <View style={styles.container_data}>
                {
                  data.map((item, i) => (<ImageCard onPress={() => navigation.navigate(STARGATE_DETAILS, (item))} data={item} key={i} />))
                }
            </View>
          </ScrollView>
        </View>
      )
    }
}


const styles = StyleSheet.create({
  container_data: {
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    paddingBottom: 120
  },
  application_container: {
    backgroundColor: 'white'
  }
})
