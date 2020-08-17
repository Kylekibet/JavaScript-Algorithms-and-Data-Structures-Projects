// 1 - 3 is I = 1
// 4 - 8 is V = 5
// 9 - 39 is X = 10
// 40 - 89 is L = 50
// 90 - 399 is C = 100
// 400 - 899 is D = 500
// 900 -> is M = 1000

// repeat a item iter number of times
function repeater(item, iter){
    let repeated = '';
    while(iter > 0){
      repeated += item
      iter--;
    }
    return repeated;
  }
  
  function convertToRoman(num) {
    let romSym = ''
    let count = 0;
    const placeValue = [] // holds place value of each number (ones, tenths, hundreds, thousands)
    num.toString().split("").reverse().forEach(numb =>{
      placeValue.push(parseInt(numb + repeater('0', count)))
      count++;
    })
    placeValue.reverse().forEach(item => {
      if(item >= 1 && item <= 3) romSym += repeater('I',item) // checks for range 1 to 3
      else if(item >= 4 && item <= 8) (item - 5 >= 0) ? romSym += 'V' + repeater('I', item-5) : romSym += repeater('I', Math.abs(item - 5)) + 'V'; // checks for range 4 to 8
      else if(item >= 9 && item <= 39) (item - 10 >= 0) ? romSym += repeater('X', item / 10) : romSym +='IX'; // checks for range 9 to 49
      else if(item >= 40 && item <= 89) (item - 50 >= 0) ? romSym += 'L' + repeater('X', (item /10)-5) : romSym +='XL';  // checks for range 50 to 89
      else if(item >= 90 && item <= 399) (item - 100 >= 0) ? romSym += 'C' + repeater('C', (item /100)-1) : romSym +='XC'; // checks for range 90 to 399
      else if(item >= 400 && item <= 899) (item - 500 >= 0) ? romSym += 'D' + repeater('C', (item /100)-5) : romSym +='CD'; // checks for range 400 to 899
      else if(item >= 900) (item - 1000 >= 0) ? romSym += 'M' + repeater('M', (item /1000)-1) : romSym +='CM'; // checks for range 1000 and beyond
    })
    
   return romSym;
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(8))
  console.log(convertToRoman(3999));