import HttpClientFacade from './HttpClientFacade';

export default class MoneyConverterService extends HttpClientFacade {
    getList() {
    	return super.get("http://api.fixer.io/latest");
    }

    getConversion(fromCurrency, toCurrency) {
    	return super.get(`http://api.fixer.io/latest?base=${fromCurrency}&symbols=${toCurrency}`);
    }
}