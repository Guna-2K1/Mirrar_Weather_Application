// weatherServices.js
const API_KEY = "f7b07e5949e910fe29fefa880a3384ad";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log('API Response:', data); // Log the entire API response

    if (!data || !data.main || !data.weather) {
      throw new Error('Invalid API response structure');
    }

    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name,
    } = data;

    if (!temp || !feels_like || !temp_min || !temp_max || !pressure || !humidity || !speed || !country || !name || !weather[0]) {
      throw new Error('Invalid data structure in API response');
    }

    const { description, icon } = weather[0];

    return {
      description,
      iconURL: makeIconURL(icon),
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
    };
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

export { getFormattedWeatherData };
