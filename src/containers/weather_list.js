import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	constructor(props) {
		super(props);
		this.renderWeather = this.renderWeather.bind(this);
		this.toCelsius = this.toCelsius.bind(this);
	}

	toCelsius(temp) {
		return _.round(temp - 273.15);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map((weather)=>{
			let temp = weather.main.temp;
			return this.toCelsius(temp);
		});


		const pressures = cityData.list.map(weather=>weather.main.pressure);
		const humidities = cityData.list.map(weather=>weather.main.humidity);
		const {lat,lon} = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="orange" units="C" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		);
	}
	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}) {
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);