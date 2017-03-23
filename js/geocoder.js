import { NativeModules } from 'react-native';
import GoogleApi from './googleApi.js';

const { RNGeocoder } = NativeModules;

export default {
  apiKey: null,

  fallbackToGoogle(key) {
    this.apiKey = key;
  },

  geocodePosition(position) {
    if (!position || !position.lat || !position.lng) {
      return Promise.reject(new Error("invalid position: {lat, lng} required"));
    }
    return GoogleApi.geocodePosition(this.apiKey, position);

    // return RNGeocoder.geocodePosition(position).catch(err => {
    //   if (!this.apiKey || err.code !== 'NOT_AVAILABLE') { throw err; }
    //   return GoogleApi.geocodePosition(this.apiKey, position);
    // });
  },

  geocodeAddress(address) {
    if (!address) {
      return Promise.reject(new Error("address is null"));
    }
    return GoogleApi.geocodeAddress(this.apiKey, address);

    // return RNGeocoder.geocodeAddress(address).catch(err => {
    //   if (!this.apiKey || err.code !== 'NOT_AVAILABLE') { throw err; }
    //   return GoogleApi.geocodeAddress(this.apiKey, address);
    // });
  },
}
