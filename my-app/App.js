import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import ImageCard from './components/imageCard'

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends React.Component {
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
      return (
        <View style={styles.container}>
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
                // onLeftElementPress={ (label) => { this._toggleModal(true) }}
              />
          </View>
          <ScrollView>
            <View style={styles.container_data}>
                {
                  data.map((item, i) => (<ImageCard data={item} key={i} />))
                }
            </View>
          </ScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  container_data: {
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    paddingBottom: 120
  },  
  application_container: {
    paddingTop: 24
  }
})
