 let transactionss = [{
  id: 1,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out1',
  time: '2018-03-01T12:34:00Z'
},{
  id: 2,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out2',
  time: '2018-03-02T12:34:00Z'
},{
  id: 3,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: 30,
  category: 'eating_out3',
  time: '2018-03-03T12:34:00Z'
},{
  id: 4,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out4',
  time: '2018-03-04T12:34:00Z'
},{
  id: 5,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out5',
  time: '2018-03-31T12:34:00Z'
}];


startDate =  new Date("2018-03-01T12:34:00Z");
endDate =   new Date("2018-03-31T12:34:00Z"); 
xcategory = 'eating_out4';

function getAmountByCategoryInPeriod (transactions = [], category, start, end) {
  
        let transactionsAftherFilter = transactions.filter(x=>filterProcess(x,category, start, end));
		result = transactionsAftherFilter.reduce(function (accumulator, currentValue) {
		    return accumulator + currentValue.amount;
		},0);

        console.log(result);
}

getAmountByCategoryInPeriod(transactionss,)
function filterProcess(x,category,startDate,endDate){

		//vDates: Validate dates
		let vDates = (timeTransaction,dateFrom,dateTo)=>{
					let timeTrasactionFormat = new Date(timeTransaction);
 					return  timeTrasactionFormat >= dateFrom && timeTrasactionFormat <= dateTo;
		}
		//vCategory: Validate Category
		let vCategory = (xCategory,category)=> xCategory == category;

		let xPrice = (price)=> price < 0;

		let vResult = vDates(x.time,startDate,endDate) 
						&& vCategory(x.category,category) 
						&&xPrice(x.amount);

		return vResult;
}
let transactions = [{
  id: 1,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-01T12:34:00Z'
},{
  id: 2,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-02T12:34:00Z'
},,{
  id: 3,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-02T12:34:00Z'
},{
  id: 4,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-02T12:34:00Z'
}];
let startDate =  new Date("2018-03-01");
let  endDate =   new Date("2018-03-31");
let transactionsFilterDate = transactions.find(x=>applicateDataFormat(x.time,startDate,endDate));
console.log(transactionsFilterDate);
//Working whit the date using 
function  applicateDataFormat(timeTransaction,dateFrom,dateTo){

     let timeTrasactionFormat = new Date(timeTransaction);
    return  (timeTrasactionFormat >= dateFrom && timeTrasactionFormat <= dateTo);


}
tr;onsFilterDate
