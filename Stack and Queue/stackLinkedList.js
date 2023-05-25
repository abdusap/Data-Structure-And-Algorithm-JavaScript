class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next = this.head
            this.head=node 
        }
        this.size++
    }

    stringReverse(str,index=0){

        // if(!index){
        //     console.log(index);
        //     index=0
        //     console.log(index);
        // }
     if(str.length==index){
        return
     }else{
        this.push(str[index])
        this.stringReverse(str,index+1)
     }
    }

    print(){
        let curr=this.head
        value=''
        while(curr){
            value+=`${curr.value} `
            curr=curr.next
        }
        return value
    }


    pop(){
        if(this.isEmpty()){
            return null
        }
        else{
            let removeNode=this.head
            this.head=removeNode.next
            this.size--
            return removeNode.value
        }
    }

    print(){
        let curr=this.head
        let value=''
        while(curr){
            value+=`${curr.value} `
            curr=curr.next
        }
        console.log(value);
    }


    reverseString(str){
        for (let i=0;i<str.length;i++){
            this.push(str[i])
        }
    }
}


const stack = new Stack()
// stack.push(39)
// stack.push(9)
// stack.push(99)
// stack.push(92)
// stack.pop()
let str = 'abdu'
stack.stringReverse(str)
console.log(stack.print());
// console.log(str[1]);

// console.log(str.length);
