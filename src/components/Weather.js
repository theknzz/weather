import React, { useState } from 'react'
import CardContent from "./CardContent";
import 'weather-icons/css/weather-icons.css'
import styled from '@emotion/styled'

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 40px;
    background-color: #3581B8;
    padding: 20px;
    flex-wrap: wrap;
    color: #EBE9E9;
    text-shadow: 2px 2px #FCB07E;
`

const WeatherInfo = styled.div`
    display: flex;
    justify-content: center;
`

const UserInput = styled.div`
    display: flex;
    justify-content: center;
`

const initialData = {
    location: 'Coimbra',
    title: '...',
    description: '',
    temp_max: '0',
    temp_min: '0',
    temp: '0',
    id: -1,
}

const Weather = () => {
    const [weather, setWeather] = useState(initialData)

    const API_KEY = '63f26d323a9e3545b746bba6364e73b4';

    const response = (city) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data)
                setWeather({
                    ...weather,
                    title: data.weather[0].main,
                    description: data.weather[0].description,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    temp: data.weather[0].main.temp,
                    id: data.weather[0].id,
                });
            })
            .catch( err => alert('Location does not exit!'))
    }

    const handleChange = (e) => {
        setWeather( {
            ...weather,
            location: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        response(weather.location)
    }

    return (
        <div>
            <Title>Weather app</Title>
            <WeatherInfo>
                <CardContent weather={weather} />
            </WeatherInfo>
            <UserInput>
                <form onSubmit={handleSubmit}>
                    <input placeholder={'Coimbra'} type={'text'} onChange={handleChange}/>
                    <button className={'wi wi-direction-right'}></button>
                </form>
            </UserInput>
        </div>

    );
}

export default Weather