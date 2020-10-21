const ParseWeatherToIcon = (rangeId) => {
    if (rangeId === 800) return 'wi wi-day-sunny';
    else if (rangeId >= 801 && rangeId <= 804)  return 'wi wi-cloudy';
    else if (rangeId >= 300 && rangeId <= 321)  return 'wi wi-showers';
    else if (rangeId >= 500 && rangeId <= 521)  return 'wi wi-rain';
    else if (rangeId >= 200 && rangeId < 232)   return 'wi wi-thunderstorm';
    else if (rangeId >= 600 && rangeId <= 622)  return 'wi wi-snow';
    else if (rangeId >= 701 && rangeId <= 781)  return 'wi wi-dust';
    return 'wi wi-na';
}

export default ParseWeatherToIcon