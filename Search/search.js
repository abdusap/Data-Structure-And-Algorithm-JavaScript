function binarySearch(arr, val) {
    let start = 0,
      end = arr.length - 1;
    middle = Math.floor((start + end) / 2);
    while (start <= end) {
      if (arr[middle] === val) return middle + 1;
      if (val < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    return false;
  }
  
  console.log(binarySearch([5, 6, 77, 88], 88));





function linearSearch(arr,val){

    for(i=0;i<arr.length;i++){
      if(arr[i]===val){
        return i+1
      }
    }
    return false
  }
  
  console.log(linearSearch([1,2,44,55,33],55))