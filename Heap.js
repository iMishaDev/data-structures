
class Heap {
    constructor(arr=[]){
        this.heap = arr;
    }

    hasParent(index){
        return this.heap[Math.floor((index - 1) / 2)]
    }

    hasLeftChild(index){
        return this.heap[(index * 2) + 1]
    }

    hasRightChild(index){
        return this.heap[(index * 2) + 2]
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(){
        return (index * 2) + 1
    }

    getRightChildIndex(){
        return (index * 2) + 2
    }

    getParent(index){
        return this.heap[Math.floor((index - 1) / 2)]
    }

    getLeftChild(index){
        return this.heap[(index * 2) + 1]
    }

    getRightChild(index){
        return this.heap[(index * 2) + 2]
    }

    peek(){
        return this.heap[0]
    }

    #swap(element1, element2){
        let temp = element1
        element1 = element2
        element2 = temp
        return [ element1, element2 ]
    }
    add(element){
        this.heap[this.heap.length] = element
        this.#heapifyUp()
        return this.heap[this.heap.length - 1]
    }

    poll(){
        let element = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.length -=1
        this.#heapifyDown()
        return element
    }

    #heapifyUp(){
        let index = this.heap.length - 1

        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            [this.heap[this.getParentIndex(index)], this.heap[index]] =
            this.#swap(this.heap[this.getParentIndex(index)], this.heap[index])
            index = this.getParentIndex(index)
        }
    }

    #heapifyDown(){

    }
}

let heap = new Heap([]);
console.log('add 100 ', heap.add(100))
console.log('add 10 ', heap.add(10))
console.log('add 9', heap.add(9))
// console.log('poll ', heap.poll())
console.log('add 1 ', heap.add(1))
console.log('peek', heap.peek())
console.log(heap)
