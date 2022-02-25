module.exports = function toReadable (num) {
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
    let numarr = num.toString().split("").map(Number);
    let text = "";
    if(num <= 20) { 
      return numbers[num];
    }
    if(numarr.length == 2){
        text+= numbers[numarr[0]*10] + " " + (numbers[numarr[1]] == "zero" ? "": numbers[numarr[1]]); 
        return text.trim();
    }
    if(numarr.length == 3 ) { 
        if (numarr[1] == 1 ) { 
           return text+= numbers[numarr[0]]+ " hundred " + numbers[numarr[1].toString()+ numarr[2]];   
         } else if (numarr[1] == 0) { 
             text+= numbers[numarr[0]]+ " hundred " + (numbers[numarr[2]] == "zero" ? "" : numbers[numarr[2]]);
             return text.trim();
         }
        else {  
            text+= numbers[numarr[0]]+ " hundred " + numbers[numarr[1]*10] + " " + (numbers[numarr[2]] == "zero" ? "" : numbers[numarr[2]])
            return text.trim();
        }
    }  
}
