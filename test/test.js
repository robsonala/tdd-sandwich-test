const assert = require('assert');
const SandwichMaker = require('../lib/sandwich');


describe('SandwichMaker', function(){

  // Static
  describe('Statics', function(){

    it('it should return error', function(){
      let sandwich = new SandwichMaker();

      assert.throws(() => { sandwich.timeToMake = 10; }, Error);
      assert.throws(() => { sandwich.timeToServe = 10; }, Error);
    });

  });

  // GetLineRecord
  describe('GetLineRecord', function(){
    it('it should return example', function(){
      let sandwich = new SandwichMaker();

      assert.equal('0 sec - 0 Sandwich number 0\n', sandwich.GetLineRecord('0','0','0'));
    });
  });

  // SetOrder
  describe('SetOrder', function(){

    it('it should return true', function(){
      let sandwich = new SandwichMaker();

      assert.equal(true, sandwich.SetOrder(1));
      assert.equal(true, sandwich.SetOrder(5));
      assert.equal(true, sandwich.SetOrder(4));
    });
    it('it should return false', function(){
      let sandwich = new SandwichMaker();

      assert.equal(true, sandwich.SetOrder(0));
      assert.equal(true, sandwich.SetOrder(-1));
    });

  });

  // ShowOrders
  describe('ShowOrders', function(){

    it('it should return empty', function(){
      let sandwich = new SandwichMaker();

      assert.equal('No orders found!', sandwich.ShowOrders());
    });
    it('it should return 1 orde line', function(){
      let sandwich = new SandwichMaker();
      sandwich.SetOrder(1)

      assert.equal(
        sandwich.GetLineRecord('0','make','1') +
        sandwich.GetLineRecord(sandwich.timeToMake,'serve','1'),
        sandwich.ShowOrders()
      );
    });
    it('it should return (n) order lines', function(){
      let sandwich = new SandwichMaker();
      sandwich.SetOrder(2)

      assert.equal(
        sandwich.GetLineRecord('0','make','1') +
        sandwich.GetLineRecord(sandwich.timeToMake,'serve','1') +
        sandwich.GetLineRecord((sandwich.timeToMake + sandwich.timeToServe),'make','2') +
        sandwich.GetLineRecord((sandwich.timeToMake * 2 + sandwich.timeToServe),'serve','2'),
        sandwich.ShowOrders()
      );
    });

  });

});