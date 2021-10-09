

/**
 * Implementation of Priority Queue using Max Heap
 */


class PriorityQueue {

    constructor(){
        this.heap = [];
    }

    #hasParent(index){
        return this.heap[Math.floor(index/2)];
    }

    #hasLeftChild(index){
        return this.heap[index * 2 + 1];
    }

    #hasRightChild(index){
        return this.heap[index * 2 + 1];
    }

    #getParent(index){
        return this.heap[Math.floor(index/2)];
    }

    #getParentIndex(index){
        return Math.floor(index/2);
    }

    #getLeftChildIndex(index){
        return index * 2 + 1
    }

    #getRightChildIndex(index){
        return index * 2 + 2
    }

    #getLeftChild(index){
        return this.heap[index * 2 + 1];
    }

    #getRightChild(index){
        return this.heap[index * 2 + 2];
    }


    #heapify_up(){
        let index = this.heap.length - 1;

        while(this.#hasParent(index) && this.heap[index]  > this.#getParent(index)){
            [this.heap[index], this.heap[this.#getParentIndex(index)]] = [this.heap[this.#getParentIndex(index)], this.heap[index]];
            index = this.#getParentIndex(index);
        }
    }


    #heapify_down(){
        let index = 0;
        let largest = 0;

        while(this.#hasLeftChild(index) && this.#getLeftChild(index) > this.heap[index]){
            largest = this.#getLeftChildIndex(index);

            if(this.#hasRightChild(index) && this.#getRightChild(index) > this.heap[largest]){
                largest = this.#getRightChildIndex(index);
            }

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    size() {
        return this.heap.length
    }

    peek(){
        return this.heap[0];
    }

    enqueue(element){
        if(this.heap.length === 0)
            this.heap.push(element);
        else {
            this.heap.push(element);
            this.#heapify_up();
        }
    }

    dequeue(){
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.length -=  1;
        this.#heapify_down();
    }
}
let queue = new PriorityQueue();
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(9)
queue.enqueue(5)
queue.enqueue(2)

console.log(queue.heap)
queue.dequeue()
console.log(queue.heap)