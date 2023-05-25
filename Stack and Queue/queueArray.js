class Queue {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        return this.items.shift()
    }

    print() {
        console.log(this.items.toString());
    }
    
}

const queue = new Queue()
queue.push(10)
queue.push(20)
queue.push(30)
console.log(queue.pop());
queue.print()