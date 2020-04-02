import moment from 'moment';
import Logger from '../config/logger';

const format = 'DD/MM/YYYY';

class Portofolio {
  constructor(stocks) {
    this.stocks = stocks;
  }

  // Method to print the stocks
  printStocks() {
    this.stocks
    // Sort by date
      .sort((a, b) => moment(a.date, format).unix() - moment(b.date, format).unix())
    // Log
      .forEach((stock) => {
        Logger.info('stock', stock);
      });
  }

  profit(startDate, finishDate) {
    const start = moment(startDate, format).subtract(1, 'day');
    const finish = moment(finishDate, format).add(1, 'day');

    const stocks = this.stocks
    // Get the stocks between start and finish date
      .filter((stock) => moment(stock.date, format).isBetween(start, finish))
      // Sort by date
      .sort((a, b) => moment(a.date, format).unix() - moment(b.date, format).unix());

    // Print the stocks
    stocks.forEach((stock) => {
      Logger.info('stock', stock);
    });

    // Get the sum of profits and prices
    const profit = stocks.map((stock) => stock.profit).reduce((a, b) => a + b, 0);
    const prices = stocks.map((stock) => stock.price).reduce((a, b) => a + b, 0);
    // (Differences of days)/365 days is the 'years'
    const proportionalOfTheYear = finish.diff(start, 'day') / 365;
    const annualizedReturn = (1 + profit / prices) ** (1 / proportionalOfTheYear) - 1;
    Logger.info('profit', profit);
    Logger.info('total price', prices);
    Logger.info('annualized return', `${annualizedReturn * 100}%`);
    return annualizedReturn;
  }
}

export default Portofolio;
