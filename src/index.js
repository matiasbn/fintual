import moment from 'moment';
import Portfolio from './classes/Portfolio';
import Logger from './config/logger';

// State current date to add dates to the Stocks, and the amount of stocks
const currentDate = new Date();
const amountOfStocks = 100;
const spanTime = 200;

// Create the stocks to fill the portfolio Class
// I simulated the Stocks 'Class' as an object to simplify execution
// date simulates the creation date of the stock
// price simulates the purchasing price
// profit simulates the current profit for the stock
const stocks = new Array(amountOfStocks)
  .fill(null)
  .map(() => {
    // To randomize the date
    const indexDate = Math.round(Math.random() * spanTime);
    return {
      price: Math.round(Math.random() * 100),
      date: moment(currentDate).subtract(indexDate, 'day').format('DD/MM/YYYY'),
    };
  })
  // Set the profits based on the price
  .map((stock) => {
    const sign = Math.random() > 0.5 ? -1 : 1;
    const profit = sign * Math.round(Math.random() * 100);
    return {
      ...stock,
      // Limit the negative profits to be equal to price i.e. losing all the investment
      profit: profit < -1 * stock.price ? -1 * stock.price : profit,
    };
  });

// State start and finish date on DD/MM/YYYY format
const startDate = '31/01/19';
const finishDate = '01/04/20';

// Instance portolio class
const portfolio = new Portfolio(stocks);

// Log data
Logger.info('startDate', startDate);
Logger.info('finishDate', finishDate);

// Execute profit method
portfolio.profit(startDate, finishDate);
