class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.head.next = newNode          
            this.tail = this.head
            this.length++
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        return current

    }

    shift() {
        if(!this.head) return undefined

        const oldHead = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return oldHead
    }

    unshift(val) {
        const oldHead = this.head
        this.head = new Node(val)
        this.length++

        if(!oldHead?.next) {
            this.tail = this.head
            return 
        }

        this.head.next = oldHead

        return
        
    }
}

module.exports = SinglyLinkedList