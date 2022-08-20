
const arr = [1,4,0,-0,false,null,false,0,4,"dwda"];
function counter(array1){
    let count = 0;
    for(let i of array1){
        if(i!=false && i!=NaN && i!=undefined && i!=null){
            count++;
        }
    }
    return count;
}
console.log(counter(arr));