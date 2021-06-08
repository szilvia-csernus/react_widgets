import React from 'react';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
}

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        };
        this.loadWeather = this.loadWeather.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.loadWeather)
    }

    loadWeather(location) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        };
        url += toQueryString(params);
        url += '&units=metric'
        const apiKey = 'ba68169abc3d2e474681a3c7f6926179';
        url += `&APPID=${apiKey}`;


        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({ weather: data });
            }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }


    render() {
        let content = <div></div>;

        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = weather.main.temp
            content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} &#176;C</p>
            </div>;
        } else {
            content = <div className='loading'>loading weather...</div>;
        }
        return (
            <div >
                <h1>Weather</h1>
                <div className="general-frame weather">
                    {content}
                </div>
            </div>
        )
    }
}

export default Weather

