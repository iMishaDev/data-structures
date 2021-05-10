class Stack {


    constructor(){
        this.stack = []
        this.head = -1;
        this.maxes = []
    }


    push(element){
        ++this.head;
        this.stack[this.head] = element
        this.maxes.push(element)
    }

    pop(){
        let element = this.stack[this.head]
        this.maxes.splice(this.head,1)

        this.stack.length -= 1;
        --this.head;
        return element
    }

    peek(){
        return this.stack[this.head] || -1;
    }

    length(){
        return this.head + 1
    }

    isEmpty(){
        return this.head === -1;
    }

    search(target) {
        for (let x = 0; x<this.head; x++){
            if (this.stack[x] === target) return x
        }
        return -1;
    }
}

let stack = new Stack([]);
// console.log('push 9 ', stack.push(9))

// console.log('push 10', stack.push(10))
// console.log('pop ', stack.pop())
// console.log('push 1 ', stack.push(1))
// console.log('length', stack.length())
// console.log('isEmpty', stack.isEmpty())
// console.log('peek', stack.peek())
// console.log('searching for 10', stack.search(10))
// console.log('pop ', stack.pop())
// console.log('pop ', stack.pop())
// console.log('isEmpty', stack.isEmpty())
// console.log('peek', stack.peek())
// console.log('max', stack.max())
// console.log(stack)

console.log(Stack.productExceptSelf([1, 2, 3, 4]))