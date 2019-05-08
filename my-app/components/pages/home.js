import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'
import ImageCard from '../imageCard'
import { SearchBar } from 'react-native-elements'
import { STARGATE_DETAILS } from '../router'



const win = Dimensions.get('window')
const w = win.width
const h = win.height

const url = 'https://api.tvmaze.com/search/shows'
const stargate = '?q=stargate'

export default class HomeScreen extends React.Component {
    state = {
      isModalVisible: false,
      loading: true,
      search: '',
      error: false,
      data: []
    }

    updateSearch = search => {
      this.setState({ search });
    }

    onSubmitSearch = async () => {
      if(this.state.search !== '') {
        const response = await fetch(url+"?q="+this.state.search)
        const data = await response.json()
        if(data)
          this.setState({data: data, loading: false, noSearch: false, error: false})
        else this.setState({noSearch: true, loading: false, error: false})
      }
    }

    componentDidMount = async() => {
      const response = await fetch(url+stargate)
      const data = await response.json()
      if(data)
          this.setState({data: data, loading: false, noSearch: false, error: false})
      else this.setState({noSearch: true, loading: false, error: false})
    }

    componentDidCatch = (error, info) => {
      this.setState({
        error: true,
        data: [],
        loading: false
      })
    }

    _toggleModal = (status) =>
        this.setState({ isModalVisible: status })


    render() {
      const { data } = this.state
      const { navigation } = this.props
      const { search } = this.state

      if(this.state.loading) {
        return (
           <View style={styles.loading_container}>
             <Text style={styles.loading_text}>Loading..</Text>
           </View> 
        )
      }

      if(this.state.noSearch) {
        return(
          <View style={styles.loading_container}>
            <Text style={styles.loading_text}>Ничего не найдено!</Text>
          </View>
        )
      }

      if(this.state.error) {
        return(
          <View style={styles.loading_container}>
            <Text style={styles.loading_text}>Упс! Произошла ошибка</Text>
          </View>
        )
      }

      return (
        <View style={styles.application_container}>
          <View style={styles.header}>
            <View style={{flex: 2, justifyContent: 'space-between'}}>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
              />
            </View>
            <Button
                onPress={this.onSubmitSearch}
                buttonStyle={{flex: 1, padding: 20, height: w*0.14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#292929', borderRadius: 0}}
                icon={
                  <Icon
                    name="search"
                    size={20}
                    color="white"
                  />
                }
            />
          </View>
          <ScrollView>
            <View style={styles.container_data}>
                {
                  data.map((item, i) => (<ImageCard onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))} data={item.show} key={i} />))
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
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },  
  loading_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: w
  },
  loading_text: {
    fontSize: 25,
    backgroundColor: 'white',
  }
})
