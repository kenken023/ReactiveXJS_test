import React from 'react';

export default class CurrencySelectComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<span className="select-component">
				<select onChange={this._selectChanged.bind(this)} ref="selectedCurrency">
					{
						this.props.currencies.map(function(currency, id) {
							return <option key={id} value={currency}>{currency}</option>
						})
					}
				</select>
			</span>
		)
	}

	_selectChanged() {
		var value = this.refs.selectedCurrency.value;
    	this.props.changeEvent(value);
	}
}