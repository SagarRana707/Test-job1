let array1 =[1,3,6,2,4];
let array2 =[2,0,4,1,2];
let array3 =[];

for(let i=0;i<array1.length;i++){
  let checkSum = false;
    let sum = 0;
    sum = array1[i] + array2[i];

    for(let j=0;j <array3.length;j++){
    if(array3[j] === sum){
       checkSum = true;
    }
    }if(!checkSum){
    array3.push(sum);}
}
console.log(array3);