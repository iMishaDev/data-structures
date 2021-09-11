export class MyArray {

    constructor(size){
        this.array = new Array(size);
        this.current = 0;
    }

    insert(element){
        if(this.current === this.array.length){
            let newArray = new Array(this.array.length * 2);
            newArray = [...this.array, element];
            this.array = newArray;
        }
            this.array[this.current] = element;
            this.current += 1;

    }

    removeAt(index){
        if(index < 0 || index > this.current){
            throw Error('illegal argument value')
        }

        while(index + 1 <= this.current){
            this.array[index] = this.array[index + 1];
            index += 1
        }
        this.current -= 1;
    }

    indexOf(element){
        let i = 0;
        while(i <= this.current){
            if(this.array[i] === element){
                return i;
            }
            i += 1
        }
        return -1;
    }

    print(){
        let i = 0; 
        while(i <= this.current){
            console.log(this.array[i])
            i += 1;
        }
    }
}

// let a = new MyArray(3);
// console.log('inserting 1', a.insert(1));
// console.log('inserting 2', a.insert(2));
// console.log('inserting 3', a.insert(3));
// console.log('inserting 4', a.insert(4));
// a.print()
// console.log('removing at index 1', a.removeAt(1));
// console.log('index of 2', a.indexOf(2));
// console.log('index of 4', a.indexOf(4));
// a.print()

// console.log('removing at index 1', a.removeAt(5));
