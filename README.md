# fintual

## Instructions
Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price.

Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates

## Dependencies
### Node.js
Install [Node.js](https://nodejs.org/es/), then run:

```
node --version
```

To check it was correctly installed.
### yarn

Install [Yarn](https://classic.yarnpkg.com/en/docs/install), then tun:

```
yarn --version
```

To check that yarn was correctly installed.

## Usage

Install all dependenciesº by running:
```
yarn
```

Then, inside src/index.js, you can manipulate parameters to run the program:

* amountOfStocks: amount of stocks to initiate the Portofolio constructor.
* spanTime: to determine whats the windows of 'creation date' to simulate the stocks
* startDate: start date to run the profit method (DD/MM/YYYY format)
* finishDate: start date to run the profit method (DD/MM/YYYY format)

## Running the project

Run the start script by typing:
```
yarn start
```

It will prompt the something like this:
```
01/04 17:29:11] INFO : startDate 01/04/20
[01/04 17:29:11] INFO : finishDate 02/04/20
[01/04 17:29:11] INFO : stock {"price":55,"date":"02/04/2020","profit":-34}
[01/04 17:29:11] INFO : stock {"price":79,"date":"02/04/2020","profit":-56}
[01/04 17:29:11] INFO : stock {"price":79,"date":"01/04/2020","profit":63}
[01/04 17:29:11] INFO : stock {"price":23,"date":"02/04/2020","profit":26}
[01/04 17:29:11] INFO : stock {"price":23,"date":"02/04/2020","profit":-23}
[01/04 17:29:11] INFO : stock {"price":82,"date":"02/04/2020","profit":38}
[01/04 17:29:11] INFO : stock {"price":52,"date":"02/04/2020","profit":-52}
[01/04 17:29:11] INFO : profit -38
[01/04 17:29:11] INFO : total price 393
[01/04 17:29:11] INFO : annualized return -0.09669211195928754
```

Returning the profit of the stocks, the total price of those stocks and the annualized return