const SandwichMaker = require('./lib/sandwich'),
    command = require('commander');

command
  .version('0.0.1')
  .option('-o, --orders <n>', 'Order quantity', 0)
  .parse(process.argv);

if (!command.orders)
{
    console.log("Please insert an order quantity");
    return;
}

let sandwich = new SandwichMaker();
sandwich.SetOrder(command.orders);

console.log(sandwich.ShowOrders());