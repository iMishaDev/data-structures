class Stack {


    constructor(){
        this.stack = []
        this.head = -1;
    }


    push(element){
        ++this.head;
        this.stack[this.head] = element
    }

    pop(){
        let element = this.stack[this.head]
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

    print(){
        this.stack.map((element) => console.log(element))
    }
}



let stack = new Stack([]);
console.log('push 10', stack.push(10))
console.log('push 9 ', stack.push(9))
console.log('pop ', stack.pop())
console.log('push 1 ', stack.push(1))
console.log('length', stack.length())
console.log('isEmpty', stack.isEmpty())
console.log('peek', stack.peek())
console.log('searching for 10', stack.search(10))
console.log('pop ', stack.pop())
console.log('pop ', stack.pop())
console.log('isEmpty', stack.isEmpty())
console.log('peek', stack.peek())

console.log(stack)