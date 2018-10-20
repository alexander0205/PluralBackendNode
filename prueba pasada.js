let assert = require("chai").assert;

let Test_One = [{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-12T12:34:00Z'
},{
  id: 123,
  sourceAccount: 'the_company',
  targetAccount: 'my_account',
  amount: 10000,
  category: 'salary',
  time: '2018-03-01T08:00:00Z'
}];

let Test_Two = [{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-12T12:34:00Z'
},{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'groceries_shop',
  amount: -30,
  category: 'groceries',
  time: '2018-03-12T12:34:00Z'
}];

let Test_Three = [{
  id: 1,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-01T12:34:00Z'
},{
  id: 3,
  sourceAccount: 'the_company',
  targetAccount: 'my_account',
  amount: -10000,
  category: 'descount-salary',
  time: '2018-03-01T08:00:00Z'
},{
  id: 4,
  sourceAccount: 'my_account',
  targetAccount: 'groceries_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-02T12:34:00Z'
},{
  id: 5,
  sourceAccount: 'my_account',
  targetAccount: 'bread_shop',
  amount: -5,
  category: 'eating_out',
  time: '2018-03-03T12:34:00Z'
},{
  id: 6,
  sourceAccount: 'my_account',
  targetAccount: 'fuell_shop',
  amount: -100,
  category: 'eating_out',
  time: '2018-03-04T12:34:00Z'
}];


let Test_fourd = [{ id: 39,
  sourceAccount: 'my_account',
  targetAccount: 'fitness_club',
  amount: -610,
  category: 'other',
  time: '2018-05-22T11:54:10.000Z' },
{ id: 2,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-03-01T12:34:00.000Z' },
{ id: 24,
  sourceAccount: 'my_account',
  targetAccount: 'fitness_club',
  amount: -610,
  category: 'other',
  time: '2018-04-22T11:54:10.000Z' },
{ id: 38,
  sourceAccount: 'my_account',
  targetAccount: 'restaurant',
  amount: -970,
  category: 'eating_out',
  time: '2018-05-17T19:52:46.000Z' },
{ id: 15,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-04-01T10:25:10.000Z' },
{ id: 36,
  sourceAccount: 'my_account',
  targetAccount: 'internet_shop',
  amount: -1650,
  category: 'other',
  time: '2018-05-08T21:36:41.000Z' },
{ id: 30,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:54:21.000Z' },
{ id: 14,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-04-01T10:24:40.000Z' },
{ id: 21,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1690,
  category: 'groceries',
  time: '2018-04-10T18:14:10.000Z' },
{ id: 12,
  sourceAccount: 'my_account',
  targetAccount: 'bowling_place',
  amount: -600,
  category: 'other',
  time: '2018-03-05T21:12:10.000Z' },
{ id: 8,
  sourceAccount: 'my_account',
  targetAccount: 'restaurant',
  amount: -670,
  category: 'eating_out',
  time: '2018-03-02T18:54:45.000Z' },
{ id: 27,
  sourceAccount: 'company_x',
  targetAccount: 'my_account',
  amount: 10000,
  category: 'salary',
  time: '2018-04-25T08:00:00.000Z' },
{ id: 33,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:57:05.000Z' },
{ id: 20,
  sourceAccount: 'my_account',
  targetAccount: 'internet_shop',
  amount: -1650,
  category: 'other',
  time: '2018-04-08T21:36:41.000Z' },
{ id: 37,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1690,
  category: 'groceries',
  time: '2018-05-10T18:14:10.000Z' },
{ id: 23,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -70,
  category: 'eating_out',
  time: '2018-04-15T09:12:20.000Z' },
{ id: 19,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-04-07T09:54:21.000Z' },
{ id: 32,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:56:09.000Z' },
{ id: 18,
  sourceAccount: 'my_account',
  targetAccount: 'cinema',
  amount: -580,
  category: 'other',
  time: '2018-04-05T20:01:18.000Z' },
{ id: 39,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -70,
  category: 'eating_out',
  time: '2018-05-15T09:12:20.000Z' },
{ id: 4,
  sourceAccount: 'my_account',
  targetAccount: 'cinema',
  amount: -330,
  category: 'other',
  time: '2018-03-01T20:10:15.000Z' },
{ id: 9,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-03-04T07:14:20.000Z' },
{ id: 7,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -160,
  category: 'groceries',
  time: '2018-03-02T13:14:00.000Z' },
{ id: 16,
  sourceAccount: 'company_x',
  targetAccount: 'my_account',
  amount: 10000,
  category: 'salary',
  time: '2018-03-25T08:10:00.000Z' },
{ id: 13,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-04-01T10:24:00.000Z' },
{ id: 25,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -850,
  category: 'groceries',
  time: '2018-04-20T18:51:31.000Z' },
{ id: 28,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1870,
  category: 'groceries',
  time: '2018-05-05T10:24:30.000Z' },
{ id: 22,
  sourceAccount: 'my_account',
  targetAccount: 'restaurant',
  amount: -970,
  category: 'eating_out',
  time: '2018-04-17T19:52:46.000Z' },
{ id: 6,
  sourceAccount: 'my_account',
  targetAccount: 'internet_shop',
  amount: -250,
  category: 'other',
  time: '2018-03-01T22:16:40.000Z' },
{ id: 41,
  sourceAccount: 'my_account',
  targetAccount: 'cinema',
  amount: -450,
  category: 'other',
  time: '2018-05-23T19:13:10.000Z' },
{ id: 35,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:58:06.000Z' },
{ id: 31,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:55:10.000Z' },
{ id: 1,
  sourceAccount: 'company_x',
  targetAccount: 'my_account',
  amount: 10000,
  category: 'salary',
  time: '2018-02-25T08:00:00.000Z' },
{ id: 40,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -850,
  category: 'groceries',
  time: '2018-05-20T18:51:31.000Z' },
{ id: 5,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-03-02T09:25:20.000Z' },
{ id: 3,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1000,
  category: 'groceries',
  time: '2018-03-01T17:28:32.000Z' },
{ id: 11,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1540,
  category: 'groceries',
  time: '2018-03-05T16:24:31.000Z' },
{ id: 17,
  sourceAccount: 'my_account',
  targetAccount: 'supermarket',
  amount: -1870,
  category: 'groceries',
  time: '2018-04-05T10:24:30.000Z' },
{ id: 10,
  sourceAccount: 'my_account',
  targetAccount: 'fitness_club',
  amount: -560,
  category: 'other',
  time: '2018-03-04T12:54:10.000Z' },
{ id: 29,
  sourceAccount: 'my_account',
  targetAccount: 'cinema',
  amount: -580,
  category: 'other',
  time: '2018-05-05T20:01:18.000Z' },
{ id: 26,
  sourceAccount: 'my_account',
  targetAccount: 'cinema',
  amount: -450,
  category: 'other',
  time: '2018-04-23T19:13:10.000Z' }];

describe("getAmountByCategoryInPeriod()", function() {
  
  it("Test_One: returns 0 if there are no transactions", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_One,
        "groceries",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      0
    );
  });
  
  
    it("Test_Two returns -30 if there are only a single transactions of groceries", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_Two,
        "groceries",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      -30
    );
  });
  
  it("Test_Three returns -165 if there are transactions eating_out", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_Three,
        "eating_out",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      -165
    );
  });
  
    it("Test_Three returns -165 if there are transactions eating_out", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_Three,
        "eating_out",
        new Date("2018-03-02"),
        new Date("2018-03-04")
      ),
      -35
    );
  });
  
  
     
  it("Test_Three returns 1000, becouse is the salary and this category is not incoming", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_One,
        "salary",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      10000
    );
  });
  
      
  it("Test_fourd: includes transactions on `start` and excludes transactions on `end", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_fourd,
        "eating_out",
        new Date("2018-03-01T00:00:00.000Z"),
        new Date("2018-03-02T00:00:00.000Z")
      ),
      -50
    );
  });
  
   it("Test_fourd 2: includes transactions on `start` and excludes transactions on `end", function() {
    assert.equal(
      getAmountByCategoryInPeriod(
        Test_fourd,
        "eating_out",
        new Date("2018-03-01T12:34:00.000Z"),
        new Date("2018-03-02T09:25:20.000Z")
      ),
      -50
    );
  });
  
});






function getAmountByCategoryInPeriod(transactions = [], category, start, end) {
   
    //filterProcess: is a funtion of validation, making more fast the process
    let transactionsAftherFilter = transactions.filter(x => filterProcess(x, category, start, end));
 
    //Resulting a single ouput value with sum of spend
    const resultSum = transactionsAftherFilter.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.amount;
    }, 0);

    return resultSum;
}


function filterProcess(x, category, startDate, endDate) {
  
    //First vDates: Validating Dates
    let vDates = (timeTransaction, dateFrom, dateTo) => {
        let timeTrasactionFormat = new Date(timeTransaction);
          return timeTrasactionFormat >= dateFrom && timeTrasactionFormat < dateTo;
    }
    
    //Secound vCategory: Validate a single Category
    let vCategory = (xCategory, category) => xCategory == category;

 

    //Quickly return the true or false result
   return vDates(x.time, startDate, endDate) && vCategory(x.category, category) ; 
  
}