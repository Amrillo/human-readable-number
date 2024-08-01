module.exports = function toReadable (num) {
    const digit = num.toString();  
   
    const numbers = { 
        0: "zero",
        1: "one" ,
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
       10: "ten",
       11: "eleven",
       12: "twelve",
       13: "thirteen",
       14: "fourteen",
       15: "fifteen",
       16: "sixteen",
       17: "seventeen",
       18: "eighteen",
       19: "nineteen",
       20: "twenty",
       30: "thirty",
       40: "forty",
       50: "fifty",
       60: "sixty",
       70: "seventy",
       80: "eighty",
       90: "ninety",
      100: "hundred",
    }  
    if(num < 20) {  
       return numbers[num];  
    }
    if(num <= 99 && num >= 20) {   
       if(digit[1] === "0"){   
          return numbers[num]; 
       } else {  
          return numbers[+(digit[0]+"0")] + " " + numbers[+digit[1]] ;
       }
    }
    if(num > 99) {   
        const zeroCount = digit.match(/0/g)?.length ?? 0
        if(zeroCount === 2) {  
            return  numbers[+digit[0]] + " " + numbers[100]; 
        } else if (zeroCount === 1) {  
            if(digit[1] === "0") { 
               return  numbers[+digit[0]] + " hundred " +  numbers[+digit[2]];
            } else if (digit[2] === "0") {  
                return numbers[+digit[0]] + " hundred " + numbers[+(digit[1]+"0")];
            }  
        } 
    }
}
