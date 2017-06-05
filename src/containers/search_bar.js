import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		var term = e.target.value;
		this.setState({term})
	}
	onFormSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="get a 5 day forecast for your city"
					className="form-control" 
					value={this.state.term}
					onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}