import React from 'react';

import MoneyConverter from './service/MoneyConverterService';
import CurrencySelectComponent from './CurrencySelectComponent';

export default class ConverterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fromCurrency: "EUR", toCurrency: "EUR", fromValue: "", toValue: "", currencies: ["EUR"] };
        this._getCurrencyList();
    }

    render() {
        return (
            <div>
                <div className="input-value">
                    <label>
                        From: &nbsp;
                    </label>
                    <CurrencySelectComponent currencies={this.state.currencies} changeEvent={this._fromCurrencyChanged.bind(this)} />
                </div>
                <div className="input-value">
                    <label>
                        To: &nbsp;
                    </label>
                    <CurrencySelectComponent currencies={this.state.currencies} changeEvent={this._toCurrencyChanged.bind(this)} />
                </div>

                <div className="input-value">
                    <input type="text" value={this.state.fromValue} onChange={this._onInputChanged.bind(this)} />
                </div>

                <div className="input-value">
                    <input type="text" value={this.state.toValue} disabled />
                </div>

                <div>
                    <button className="btn-click" onClick={this._onConvert.bind(this)}>Convert</button>
                </div>
            </div>
        )
    }

    _getCurrencyList() {
        let converter = new MoneyConverter(),
            list = converter.getList(),
            self = this;

        list.subscribe(
            res => {
                return res.json().then(function(resp) {
                    let currentCurrencies = self.state.currencies;
                    self.setState({
                        currencies: currentCurrencies.concat(Object.keys(resp.rates))
                    });
                })
            },
            e => {
                self._logger("Get Currency List Error: " + e);
            }
        );
    }

    _onConvert() {
        if (isNaN(this.state.fromValue) || !this.state.fromValue) {
            alert("Please iput a value to be converted.");
            return;
        }

        let converter = new MoneyConverter(),
            list = converter.getConversion(this.state.fromCurrency, this.state.toCurrency),
            self = this;

        list.subscribe(
            res => {
                return res.json().then(function(resp) {
                    let convertedValue = (resp.rates[self.state.toCurrency] || 1) * self.state.fromValue;
                    self.setState({
                        toValue: convertedValue
                    });
                })
            },
            e => {
                self._logger("Get Currency List Error: " + e);
            }
        );
    }

    _fromCurrencyChanged(currency) {
        this._logger("From Changed: " + currency);

        this.setState({
            fromCurrency: currency || "EUR"
        });
    }

    _toCurrencyChanged(currency) {
        this._logger("To Changed: " + currency);

        this.setState({
            toCurrency: currency || "PHP"
        });
    }

    _onInputChanged(event) {
        this._logger(event.target.value);

        this.setState({
            fromValue: event.target.value
        });
    }

    _logger(message) {
        // console.log(message);
    }
}