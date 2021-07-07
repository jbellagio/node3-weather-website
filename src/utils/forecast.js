const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8a9f38a475d1350ffa954c9c012944cd&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, ('Forecast: ' + body.current.weather_descriptions[0] + '. The current temperature is ' + body.current.temperature + ', but it feels like ' + body.current.feelslike + '. The humidity is ' + body.current.humidity + '%.'))
        }
    })
}

module.exports = forecast