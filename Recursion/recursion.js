function recursiveBinary(arr, val) {
    function search(arr, val, start, end) {
      if (start > end) return false;
      let middle = Math.floor((start + end) / 2);
      if (val === arr[middle]) return middle + 1;
      if (val < arr[middle]) return search(arr, val, start, middle - 1);
      return search(arr, val, middle + 1, end);
    }
  
    return search(arr, val, 0, arr.length - 1);
  }
  
  console.log(recursiveBinary([1,2,3,44,5],44))





  function factorial(num){
    if(num===0) return 1
    return num * factorial(num-1)
  }
  
  console.log(factorial(5))





  const arr=[3,44,55,66,77]

function linear(arr,val,index=0){

  if(index===arr.length) return false
  if(arr[index]===val) return index+1
  return linear(arr,val,index+1)
}

console.log(linear(arr,44))