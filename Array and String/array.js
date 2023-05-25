// function accepts 2 array returns true if 2nd array contains square of all elements in the first array
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,2,6], [4,4,396,1]))



const arr=[1,2,3,4,5]

function reverse(arr){
  for(let i=0,j=arr.length-1;i<j;i++,j--){
      let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
  }
  return arr
}

console.log(reverse(arr))






const arr=[1,22,11,4,5]


function secondSmallest(arr){
  let small=arr[0],second=arr[1]
  for(let i=0;i<arr.length;i++){
      if(arr[i]>=0){
        if(arr[i]<small){
          second=small
          small=arr[i]
        }
        if(arr[i]<second && arr[i]>small){
          second=arr[i]
        }
      }
  }
  return second
}

console.log(secondSmallest(arr))