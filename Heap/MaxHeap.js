class MaxBinaryHeap{
    constructor(){
        this.value=[]
    }
    insert(element){
        this.value.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx=this.value.length-1
        const element=this.value[idx]
        while(true){
            let parentIdx=Math.floor((idx-1)/2)
          let parent=this.value[parentIdx]
          if(element<=parent) break;
         this.value[parentIdx]=element
         this.value[idx]=parent
         idx=parentIdx
        }
    }


    extractMax(){
        let max=this.value[0]
        let end=this.value.pop()
        if(this.value.length>0){
            this.value[0] = end
            this.sinkDown()
        }
        return max

    }
    sinkDown(){
        let idx=0
        const length = this.values.length
        const element=this.value[0]
        while(true){
            let leftChildIdx=2*idx+1
            let rightChildIdx=2*idx+2
            let leftChild,rightChild;
            let swap=null
            if(leftChildIdx<length){
                leftChild=this.value[leftChildIdx]
                if(leftChild>element){
                    swap=leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild=this.value[rightChildIdx]
                if(
                    (swap===null && rightChild>element) ||
                    (swap!==null && rightChild>leftChild)
                ){
                    swap=rightChildIdx
                }
            }
            if(swap===null)break;
            this.value[idx]=this.value[swap]
            this.value[swap]=element
            idx=swap
        }
    }
}

const maxBinaryHeap=new MaxBinaryHeap()

maxBinaryHeap.insert(10)
maxBinaryHeap.insert(20)
maxBinaryHeap.insert(30)
maxBinaryHeap.insert(40)
maxBinaryHeap.insert(50)
console.log(maxBinaryHeap.value);