class Node{
    constructor(value){
        this.data=value
        this.left=null
        this.right=null
    }
}
class Bst{
    constructor(){
        this.root=null
    }

    insert(data) {
        const newNode = new Node(data)
    
        if (!this.root) {
          this.root = newNode
          return this
        }
        let currentNode = this.root;
    
        while (true) {
          if (data < currentNode.data) {
            if (currentNode.left === null) {
              currentNode.left = newNode
              return this
            }
            currentNode = currentNode.left
          } else {
    
            if (currentNode.right === null) {
              currentNode.right = newNode
              return this
            }
            currentNode = currentNode.right
          }
        }
      }

      deleteRec(root,value){
        if(root == null){
          return root;
        }
        if(value < root.data){
          root.left = this.deleteRec(root.left,value)
        }else if (value > root.data){
          root.right=this.deleteRec(root.right,value)
        }
        else{
          if(root.left== null && root.right == null){
            return null
          }if(root.left == null){
            return root.right
          }else if (root.right == null){
            return root.left;
          }
          root.data = this.minValue(root.right) 
          root.right = this.deleteRec(root.right,root.data)
         
        }
        return root;
      }

      minValue(root){
        let current  = root 
        let data = current.data

        while(current){
          data = current.left.data
          current= current.left
        }
        return data
      }
     
     delete(data){
      this.root = deleteRec(this.root,data)
     }


      

    preOrderTraversal(){
        const result=[]
        function preOrder(node){
            if(node){
                result.push(node.data)
                preOrder(node.left)
                preOrder(node.right)
            }
        }
        preOrder(this.root)
        return result
    }
    inOrderTraversal(){
        const result=[]
        function preOrder(node){
            if(node){
                preOrder(node.left)
                result.push(node.data)
                preOrder(node.right)
            }
        }
        preOrder(this.root)
        return result
    }

    isBinarySearchTree(root) {
      let prev=null
      function inOrder(node){
         if(!node) return true
         if(!inOrder(node.left)) return false
         if(prev && node.data<=prev) return false
         prev=node.data
         return inOrder(node.right)
      }
      return inOrder(root)
   }

    postOrderTraversal(){
        const result=[]
        function preOrder(node){
            if(node){
                preOrder(node.left)
                preOrder(node.right)
                result.push(node.data)
            }
        }
        preOrder(this.root)
        return result
    }
}

const bst=new Bst()
console.log(bst.insert(200));
bst.insert(50)
bst.insert(300)
bst.insert(25)
bst.insert(75)
bst.insert(250)
bst.insert(400)
// bst.insert(10)
// bst.insert(30)
// bst.insert(70)
// bst.insert(80)
  // bst.insert(251)
// bst.insert(399)
// bst.insert(401)

// console.log(bst.preOrderTraversal());
console.log(bst.inOrderTraversal());
console.log(bst.delete(75));
console.log(bst.delete(400));
console.log(bst.inOrderTraversal());
console.log(bst.isBinarySearchTree());
// console.log(bst.postOrderTraversal());
