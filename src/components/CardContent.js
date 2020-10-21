import React from 'react'
import 'weather-icons/css/weather-icons.css'
import styled from '@emotion/styled'
import ParseWeatherToIcon from '../functions/Parser'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WeatherIcon = styled.i`
    font-size: 50px;
`

const WeatherMaxMin = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    min-width: 200px;
    margin-top: 20px;
`

const CardContent = ({ weather }) => {
    return (
        <Container>
            <h2>{weather.title}</h2>
            <WeatherIcon className={ParseWeatherToIcon(weather.id)}>

            </WeatherIcon>
            <WeatherMaxMin>
                <p>{weather.temp_max}ºC</p>
                <p>{weather.temp_min}ºC</p>
            </WeatherMaxMin>
        </Container>
    );
}

export default CardContent