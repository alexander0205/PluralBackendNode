function findDuplicateTransactions(data){
let dataProcess2 = [];
data.forEach(x => {
    let dataLoadTime = [];

    let resultDataGroupBy = data.filter(xt => findData(xt, x));
                  let resultDataFilterTime = resultDataGroupBy.filter(xtt => {

                      let date1l = new Date(xtt.time);
                      //date1l.setSeconds(00);
						console.log(date1l,xtt.id);
                      let tim1 = date1l.getTime();
							
                                let datTt = resultDataGroupBy.filter(dtx => {
                                    let date2l = new Date(dtx.time);
                                   // date2l.setSeconds(00);
                                    let tim2 = date2l.getTime();
                                    var timeDiff = Math.abs(tim1 - tim2);
                                    var diffDays = Math.floor(timeDiff / 86400000); // days
                                    var diffMins = Math.round(((timeDiff % 86400000) % 3600000) / 60000); // minutes
								
                                    return diffMins <2 && diffDays == 0;
                                });

                              if (datTt.length > 1)
                                  return true;
                      });


      if(resultDataFilterTime !== undefined) {
              if (resultDataFilterTime.length > 1) {
                  let existData = dataProcess2.filter(xt => findData(xt[0], resultDataFilterTime[0]));
                  if (existData.length == 0) 
                      dataProcess2.push(resultDataFilterTime);
              }
        }


});
 return dataProcess2;
}