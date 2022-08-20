function count_digits(n) {
    let numDigits = 0;
    let integers = n;
    let lastEven = -10;
    let indexInt = 1;
    let arr = [];
    while (integers > 0) {
        numDigits = integers%10;
        if(numDigits%2==0){
            if(indexInt==lastEven+1){
                arr.unshift("-");
                arr.unshift(numDigits);
                lastEven = indexInt;
                indexInt++;
            }
            else{
                arr.unshift(numDigits);
                lastEven = indexInt;
                indexInt++;
            }
        }
        else{
            arr.unshift(numDigits);
            indexInt++;
        }
        integers = (integers - integers % 10) / 10;
        }
        
    return arr;
    }
console.log(count_digits(1243568).toString().replace(/,/g, ""));

    



