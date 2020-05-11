const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7e1b02066fdf7670b1803ad0465a98a5&query=' + latitude +',' + longitude + '&units=f'
   
    request({ url, json: true},(error,{body}={}) => {
        if(error) {
        callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike + ' degree out. The humidity is ' + body.current.humidity +'%.')
        }
    })
}

module.exports = forecast