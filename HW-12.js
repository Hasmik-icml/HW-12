let str = "The indexOf() method searches the array for the specified item , and returns its position.";
let num = [10, 20, 30, 40, 8, 9, 40];

function indexOf(value, searchvalue, start){
  
  if (typeof value === 'string'){
   let strArr = value.split(' ');
    for (let j = start; j < strArr.length; ++j){
      if(strArr[j] === searchvalue){
        return j;
      }
    }
  } 
  for(let i = start; i < value.length; ++i){
      if (value[i] === searchvalue){
        return i;
      }
    }
  return -1;
}

console.log(indexOf(num, 40, 4));
console.log(indexOf(str, 'indexOf()', 0));