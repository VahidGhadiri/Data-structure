class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(value){
        this.size++
        let newNode = new Node(value)

        const searchTree = node => {

            if(value < node.value){
                if(!node.left){
                    node.left = newNode
                }else{
                    searchTree(node.left)
                }
            }

            else if(value > node.value){
                if(!node.right){
                    node.right = newNode
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(){
        let currentNode = this.root
        
        while(currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    max(){
        let currentNode = this.root

        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    contains(value){
        let currentNode = this.root

        while(currentNode){
            if(value === currentNode.value){
                return true
            }
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else{
                if(value > currentNode.value){
                    currentNode = currentNode.right
                }
            }
        }
        return false
    }
    
        dfsInOrder(){
        let result = []

        const traverse = node => {
            if(node.left) traverse(node.left)
          result.push(node.value)

          if(node.right) traverse(node.right)
        }

       traverse(this.root)
        return result
    }
}



