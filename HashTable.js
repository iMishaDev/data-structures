const List = require('./LinkedList')
class HashTable {
    constructor(size){
        this.hashTable = {}
        this.size = size
        for(let i = 0; i < size; i++){
            this.hashTable[i] = new List()
        }
    }



    #hash(element){
        let key = 0;
        element.split('').map((letter) => {
            key += letter.charCodeAt(0)
        })

        return key % this.size
    }

    add(element){
        let elementIndex = this.#hash(element)
        this.hashTable[elementIndex].insert(element)
        return  this.hashTable[elementIndex]
    }

    delete(element){
        let elementIndex = this.#hash(element)
        console.log(elementIndex)
        this.hashTable[elementIndex].delete(element)
        return this.hashTable
    }

    find(element){
        return this.#hash(element)
    }

    print(){
        for(let i = 0; i < this.size; i++){
            console.log(i, this.hashTable[i].print())
        }
    }
}

let hashTable = new HashTable(10);
hashTable.add('Mashael')
hashTable.add('Misha')
hashTable.add('Mish')
hashTable.add('Mi')
console.log('find Misha', hashTable.find('Misha'))
console.log('delete Misha', hashTable.delete('Misha'))
hashTable.print()
