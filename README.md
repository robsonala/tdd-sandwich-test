# BDD Sandwich Test

Node.js project used to test BDD using mocha.

***

## How to use

Require lib
```
var sandwich = require('./lib/sandwich');
```

Example usage sandwich class
```
let sandwich = new SandwichMaker();
sandwich.SetOrder(2);

console.log(sandwich.ShowOrders());
```

Or try a command line
```
node app.js -o 2
```

## How to test

```
./node_modules/mocha/bin/mocha 
```