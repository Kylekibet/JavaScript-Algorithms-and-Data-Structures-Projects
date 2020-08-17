function multiplier(item, ope){
    let item2 = []
    if(ope == 'mul') {
      item.forEach(thing => {
      item2.push([thing[0], thing[1] * 100]);
    })
    }
    else {
      item.forEach(thing => {
        //console.log(thing[1])
      item2.push([thing[0], thing[1] / 100]);
      //console.log(thing[1])
    })
    }
    //console.log(item2)
    return item2;
  }
function checkCashRegister(price, cash, cid) {
  //'use strict';
  let newCid = Array.from(cid);
  //console.log(newCid)
  //console.log
  let cashIn = 0;
  newCid.forEach(item => { cashIn += (item[1] * 100)});
  newCid = multiplier(newCid, 'mul')
  let change = {
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0
  };
  let csh = (cash*100) - (price*100);
  console.log(cashIn)
  while( csh > 0 ){
    if(cashIn >= 10000 && newCid[8][1] >= 10000 && csh >= 10000){
      change['ONE HUNDRED'] += 10000;
      cashIn -= 10000;
      csh -= 10000
      newCid[8][1] -= 10000;
    }

    else if(cashIn >= 2000 && newCid[7][1] >= 2000 && csh >= 2000){
      change['TWENTY'] += 2000;
      cashIn -= 2000;
      csh -= 2000
      newCid[7][1] -= 2000;
    }

    else if(cashIn >= 1000 && newCid[6][1] >= 1000 && csh >= 1000){
      change['TEN'] += 1000;
      cashIn -= 1000;
      csh -= 1000
      newCid[6][1] -= 1000;
    }
    else if(cashIn >= 500 && newCid[5][1] >= 500 && csh >= 500){
      change['FIVE'] += 500;
      cashIn -= 500;
      csh -= 500;
      newCid[5][1] -= 500;
    }
    else if(cashIn >= 100 && newCid[4][1] >= 100 && csh >= 100){
      change['ONE'] += 100;
      cashIn -= 100;
      csh -= 100;
      newCid[4][1] -= 100;
    }
    else if(cashIn >= 25 && newCid[3][1] >= 25 && csh >= 25){
      change['QUARTER'] += 25;
      cashIn -= 25;
      csh -= 25
      newCid[3][1] -= 25;
    }
    else if(cashIn >= 10 && newCid[2][1] >= 10 && csh >= 10){
      change['DIME'] += 10;
      cashIn -= 10;
      csh -= 10
      newCid[2][1] -= 10;
    }
    else if(cashIn >= 5 && newCid[1][1] >= 5 && csh >= 5){
      change['NICKEL'] += 5;
      cashIn -= 5;
      csh -= 5
      newCid[1][1] -= 5;
    }
    else if(cashIn >= 1 && newCid[0][1] >= 1 && csh >= 1){
      change['PENNY'] += 1;
      cashIn -= 1;
      csh -= 1;
      newCid[0][1] -= 1;
    }
    else  return {status: 'INSUFFICIENT_FUNDS', change: []};
  } // end loop

  change = multiplier(Object.entries(change).reverse().filter(fun), "div")

  //console.log(change)
  function fun(item){
    if(item[1] > 0) return item
  }
  if (cashIn === 0 ) return {status: 'CLOSED', change:cid}
  //console.log(cashIn)
  return {status: 'OPEN', change: change};
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
