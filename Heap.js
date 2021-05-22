
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

    getLeftChildIndex(index){
        return (index * 2) + 1
    }

    getRightChildIndex(index){
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
        let index = 0, smallest = 0
        

        while(this.hasLeftChild(index)){
            smallest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(smallest)){
                smallest = this.getRightChildIndex(index)
            }
            if(this.heap[index] < this.heap[smallest]) return
            else {
                [this.heap[smallest], this.heap[index]] =
                this.#swap(this.heap[smallest], this.heap[index])
                index = smallest
            }
        }
    }

    findTheHighestKthElement(k){
        let highest = this.heap
        while(k-1){
            highest = this.poll()
        }
        return highest
    }
}

let heap = new Heap([]);
console.log('add 100 ', heap.add(100))
console.log('add 10 ', heap.add(10))
console.log('add 9', heap.add(9))
// console.log('poll ', heap.poll())
console.log('add 1 ', heap.add(1))
console.log('highest', heap.findTheHighestKthElement(3))
console.log(heap)
