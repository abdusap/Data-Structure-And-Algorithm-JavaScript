class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    push(value) {
        let node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }else {
            this.tail.next = node
            this.tail = node
            // node = this.tail
        }
        this.size++
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }else {
            let removeNode = this.head
            this.head = removeNode.next
            this.size--
            return removeNode.value

        }

    }

    reveseString(str) {
        for(let i = str.length-1; i >=0 ; i--) {
            this.push(str[i])
        }


    }

    print() {
        let curr = this.head
        let queueValues = ''
        while(curr) {
            queueValues += `${curr.value} `
            curr = curr.next
        }
        console.log(queueValues);
    }
}

const queue = new Queue()
queue.push(10)
queue.push(20)
queue.push(30)
console.log(queue.dequeue());
queue.reveseString('abdu')
queue.print()
