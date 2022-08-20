let arr1 = [1,4,2,7,4];
let arr2 = [4,3,9,1,0,5,0,2];
function sum(array1,array2){
    let arr3 = [];
    if(array2.length>=array1.length){
        let max = array2.length;
        let min = array1.length;
        let i = 0;
        for(i = 0 ; i<min ; i++){
            arr3.push(array1[i]+array2[i]);
        }
        while(i<max){
            arr3.push(array2[i]);
            i++;
        }
    }
    else{
        let max = array1.length;
        let min = array2.length;
        let i = 0;
        for(i = 0 ; i<min ; i++){
            arr3.push(array1[i]+array2[i]);
        }
        while(i<max){
            arr3.push(array1[i]);
            i++;
        }
    }
    return arr3;
}
console.log(sum(arr1,arr2));
