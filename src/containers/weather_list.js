import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temperature = cityData.list.map(item => item.main.temp);
        const pressure = cityData.list.map(item => item.main.pressure);
        const humidity = cityData.list.map(item => item.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temperature} color="orange" units="K"/></td>
                <td><Chart data={pressure} color="green" units="hPa"/></td>
                <td><Chart data={humidity} color="blue" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Themperature (K)</th>
                        <th>Presure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
