class Node {
    constructor(value){
      this.value=value
      this.next=null
    }
  }
  
  class LinkedList{
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
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
       this.head=node
      }else{
        node.next=this.head
        this.head=node
      }
      this.size++
    }
    apend(value){
      const node = new Node (value)
      if(this.isEmpty()){
        this.head=node
      }else{
        let prev=this.head
        while(prev.next){
          prev=prev.next
        }
        prev.next=node
      }
      this.size++
    }
  
    print(){
      if(this.isEmpty()){
        console.log('List is empty')
      }else{
        let curr=this.head
        let listValue=''
        while(curr){
          listValue+=`${curr.value} `
          curr=curr.next
        }
        console.log(listValue)
      }
    }
  
    insert(value,index){
       if( index<0 || index>this.size){
        return 
       }
      if(index==0){
        this.prepend(value)
      }else{
        let node = new Node(value)
        let prev=this.head
        for (let i=0;i<index-1;i++){
          prev=prev.next
        }
           node.next =prev.next
           prev.next=node
           this.size++
      }
    }
  
    remove(index){
       if( index<0 || index>this.size){
        return 
       }if(index==0){
        let removed=this.head
        this.head=this.head.next
      
       }else{
         let prev=this.head
        for(let i=0;i<index-1;i++){
          prev=prev.next
        }
       }
    }
  
  
  }
  
  const list = new LinkedList()
  console.log('list is empty?',list.isEmpty());
  console.log('list size',list.getSize())
  list.prepend(10)
  list .prepend(20)
  list.prepend(30)
  list.print()
  console.log('list size',list.getSize())
  list.apend(50)
  list.insert(70,0)
  list.print()