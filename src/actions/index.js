import axios from 'axios'

const API_KEY = '8d8205f9f7c3ab35ef2fb2e059d42c83';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}, us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}