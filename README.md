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

It will prompt something like this:
```
[02/04 01:31:12] INFO : startDate 28/03/20
[02/04 01:31:12] INFO : finishDate 01/04/20
[02/04 01:31:12] INFO : stock {"price":96,"date":"28/03/2020","profit":-70}
[02/04 01:31:12] INFO : stock {"price":15,"date":"28/03/2020","profit":55}
[02/04 01:31:12] INFO : stock {"price":40,"date":"29/03/2020","profit":59}
[02/04 01:31:12] INFO : stock {"price":100,"date":"30/03/2020","profit":-79}
[02/04 01:31:12] INFO : stock {"price":58,"date":"31/03/2020","profit":48}
[02/04 01:31:12] INFO : profit 13
[02/04 01:31:12] INFO : total price 309
[02/04 01:31:12] INFO : annualized return 1126.7555453601626%
```

Returning the profit of the stocks, the total price of those stocks and the annualized return