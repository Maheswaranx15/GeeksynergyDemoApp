import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {HeaderComp, MovieCard} from '../components';
import {DrawerActions} from 'react-navigation-drawer';
import axios from 'axios';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Constants from '../Constants';

class MovieListScreen extends Component {
  state = {movieList: [], isLoading: true};
  //   this.setState({movieList: response.result, isLoading: false})
  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    console.log(" ")
    console.log("called")
    
      await axios
        .post('https://hoblist.com/movieList', {
          category: 'movies',
          language: 'telugu',
          genre: 'all',
          sort: 'voting',
        })
        .then((response) => {
            this.setState({
                movieList : response.data.result,
                isLoading:false
            })
          console.log(response.data.result[0].genre);
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }
  render() {
    return (
      <View style={styles.Container}>
        <StatusBar barStyle="default" backgroundColor="#00ADB5" />
        <HeaderComp
          headerText="Movie List"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        {this.state.isLoading ? (
          <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <ActivityIndicator size="large" color={Constants.topColor} />
          </View>
        ) : (
          <ScrollView>
            {this.state.movieList.map((data) => (
            <MovieCard title={data.title} genre={data.genre} director={data.director} star={data.stars} lang={data.language} runtime={data.runTime} views={data.pageViews} thumbnail_image={data.poster}/>
          ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center"
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default MovieListScreen;
