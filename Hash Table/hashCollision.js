class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 9
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    
    set(key, value) {
        const index = this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item =>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    
    get(key) {
        const index = this.hash(key)
        let bucket= this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] ===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
    }

    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }

    }
    
    remove(key){
        const index= this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    
}

const hash = new HashTable(50)

hash.set('name', 'abdu')
hash.set('eman', 'abdu')
hash.set('age', 'abdu')
hash.remove('name')
console.log(hash.get('name'))
hash.display()


// class HashTable{
//     constructor(size){
//      this.table= new Array(size)
//      this.size=size
//     }
//     hash(key){
//         let total =0
//         for(let i=0 ; i<key.length ; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//           this.table[index] = [[key,value]]
//         }else{
//            let sameKeyItem=bucket.find(item =>item[0]===key )
//            if(sameKeyItem){
//             sameKeyItem[1]=value
//            }else{
//             bucket.push([key,value])
//            }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let sameKeyItem=bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                  return sameKeyItem[1]
//             }
//         }

//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index] 
//         if(bucket){
//             let sameKeyItem=bucket.find(item=>item[0]===0)
//             bucket.splice(bucket.indexOf(sameKeyItem),1)
//         }
//     }

//     display() {
//                 for(let i = 0; i < this.table.length; i++) {
//                     if(this.table[i]) {
//                         console.log(i, this.table[i]);
//                     }
//                 }
        
//             }



// }

// const hash = new HashTable(50)

// hash.set('name', 'abdu')
// hash.set('name', 'abd')
// hash.set('eman', 'abdu')
// hash.set('age', 'abdu')
// hash.display()
// hash.remove('name')
// console.log(hash.get('name'))
// hash.display()