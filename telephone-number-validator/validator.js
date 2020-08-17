// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
    // regx to validate us phone number
    var regx = /^((^1(\s|)|)(\(\d{3}\)|\d{3}))(-|\s|)\d{3}(-|\s|)\d{4}$/
    return  regx.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("2 555 555-5555")); // false