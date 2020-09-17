class Node{
    constructor(data, next, prev){
        this.data = data || null
        this.next = next || null
        this.prev = prev || prev
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertAtHead(data){
        if(!this.head){
            this.head = this.tail = new Node(data)
        }else{
            let oldHead = this.head 
            this.head = new Node(data)
            this.head.next = oldHead 
            oldHead.prev = this.head
        }
        this.size++
    }

    insertAtTail(data){
        if(!this.tail){
            this.tail = this.head = new Node(data)
        }else{
            let oldTail = this.tail
            this.tail = new Node(data)
            this.tail.prev =oldTail
            oldTail.next = this.tail
        }
        this.size++
    }


    deleteHead(){
        if(!this.head){
            return null
        }else{
            let removedHead = this.head

            if(this.head === this.tail){
                this.head = this.tail = null

            }else{
                this.head = this.head.next
                this.head.prev = null
                this.size--
            }
            return removedHead.value
        }
    }


    deleteTail(){
        if(!this.tail){
            return null
        }else{
            let removedTail = this.tail

            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.tail = this.tail.prev
                this.tail.next =null
                this.size--
            }
            return removedTail.value
        }
    }


    clearData(){
        this.head = null
        this.tail = null
        this.size = 0 
    }


    printData(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}


const LL = new LinkedList()

LL.insertAtHead(10)
LL.insertAtHead(20)
LL.insertAtHead(30)
LL.insertAtHead(40)
LL.insertAtHead(50)
LL.insertAtHead(60)

LL.insertAtHead("Head Node")
LL.insertAtTail("Tail Node")

LL.deleteHead()
LL.deleteTail()

LL.clearData()
console.log(LL)
LL.printData()


