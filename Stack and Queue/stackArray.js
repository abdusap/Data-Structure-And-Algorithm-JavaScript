class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop (){
       return this.items.pop()
    }
    print(){
        console.log(this.items.toString());
    }
    insertString(str){
        for(let i=0;i<str.length;i++){
            this.push(str[i])
        }
        let reverse=''
        for(let i=0;i<str.length;i++){
             reverse+=stack.pop()
              
        }
        console.log(reverse);
    }
    
}
let stack=new Stack()
stack.push(12)
stack.push(10)
stack.push(1)
stack.pop()
stack.insertString('abdu')
stack.print()