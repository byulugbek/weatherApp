import Loading from './Loading';
import * as Location from 'expo-location';
import React from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '3e2af44fee55a8337bfe0ed96e28d671';
export default class extends React.Component {

  state = {
    isLoading: true,
  }
  
  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const condition = 'Clear';
    this.setState({isLoading: false, 
      temp: temp,
      condition: weather[0].main,
    });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      
    } catch (error) {
    }
  
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
    )
  }
}