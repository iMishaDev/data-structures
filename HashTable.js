class HashTable {
    constructor(){
        this.hashTable = {}
    }

    #hashFunction(element){
        return Math.floor(element*3/2)
    }

    add(element){
        let elementIndex = this.#hashFunction(element)
        if(this.hashTable[elementIndex])
            this.hashTable[elementIndex].push(element)
        else this.hashTable[elementIndex] = [element]
        return  this.hashTable[elementIndex]
    }

    delete(element){
        let elementIndex = this.#hashFunction(element)
        let deletedIndex =  this.hashTable[elementIndex].indexOf(element)
        this.hashTable[elementIndex].splice(deletedIndex)
        return this.hashTable
    }

    find(element){
        return this.#hashFunction(element)
    }

    print(){

    }
}

let hashTable = new HashTable();
console.log('add 100 ', hashTable.add(100))
console.log('add 10 ', hashTable.add(10))
console.log('add 9', hashTable.add(9))
console.log('add 9', hashTable.add(9))
console.log(hashTable)
console.log('find 9', hashTable.find(9))
console.log('delete 9', hashTable.delete(9))
console.log(hashTable)
