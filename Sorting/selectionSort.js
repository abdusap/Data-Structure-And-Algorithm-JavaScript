function selectionSort(arr){
    for (let i=0;i<arr.length;i++){
        let lowest=i
        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                lowest=j
            }
        }
        let temp=arr[lowest]
        arr[lowest]=arr[i]
        arr[i]=temp

    }
    return arr
}
console.log(selectionSort([2,33,4,4,5,3,4,5,3,4,55,2]));



