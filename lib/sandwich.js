'use strict';

module.exports = class SandwichMaker
{
    get timeToMake() { return 45; }
    set timeToMake(value) { throw new Error(); }

    get timeToServe() { return 15; }
    set timeToServe(value) { throw new Error(); }

    GetLineRecord(time, action, numOrder)
    {
        return `${time} sec - ${action} Sandwich number ${numOrder}\n`;
    }
  
    SetOrder(qty)
    {
        if (isNaN(qty))
        {
            return false;
        }

        this.qtyOrder = qty;
        return true;
    }

    ShowOrders()
    {
        if (!this.qtyOrder)
        {
            return 'No orders found!';
        }

        let orders = '';
        let timeSeconds = 0;
        for (let i=0; i<this.qtyOrder; i++)
        {
            orders+= this.GetLineRecord(timeSeconds, 'make', (i+1));
            timeSeconds+= this.timeToMake;
            orders+= this.GetLineRecord(timeSeconds, 'serve', (i+1));
            timeSeconds+= this.timeToServe;
        }

        return orders;
    }
  };