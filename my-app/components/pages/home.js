import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'
import ImageCard from '../imageCard'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import { STARGATE_DETAILS } from '../router'
import { searchChange, getMovies } from '../actions'


const win = Dimensions.get('window')
const w = win.width
const h = win.height

const url = 'https://api.tvmaze.com/search/shows'
const stargate = '?q=stargate'

class HomeScreen extends React.Component {
    state = {
      isModalVisible: false,
      loading: true,
    }

    updateSearch = search => {
      this.props.searchChange(search);
      this.props.getMovies(search);
    } 

    clearSearch = () => {
      this.props.getMovies('stargate')
      console.log('sds')
    }

    componentDidMount = async() => {
      const response = await fetch(url+stargate)
      const data = await response.json()
      if(data){
        this.props.getMovies('stargate')
        this.setState({loading: false})
      }
        
      else this.setState({loading: false})
    }

    componentDidCatch = (error, info) => {
      console.log('error')
    }


    render() {
      const { navigation, movie, data } = this.props

      if(this.state.error) {
        return(
          <View style={styles.loading_container}>
            <Icon name="window-close-o" size={30} color="tomato" />
            <Text style={styles.loading_text}>Упс! Произошла ошибка</Text>
          </View>
        )
      }

      if(this.state.loading) {
        return (
           <View style={styles.loading_container}>
             <Icon name="rocket" size={30} color="tomato" />
             <Text style={styles.loading_text}>Loading..</Text>
           </View> 
        )
      }

      return (
        <View style={styles.application_container}>
          <View>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={movie}
                onClear={this.clearSearch}
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
  loading_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#017dad',
    height: h
  },
  loading_text: {
    fontSize: 25,
    backgroundColor: '#017dad',
    color: 'white'
  }
})


const mapStateToProps = (state) => {
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}


export default connect(mapStateToProps, {searchChange, getMovies})(HomeScreen) 