
import { MyArray } from '../MyArray.js';

class ExtendedArray extends MyArray {

    /**
     * Time Complexity: o(n)
     * Space Complexity: o(1)
     * @returns {Integer} max value
     */
    max(){
        let max = this.array[0];
        let i = 0;
        while(i < this.current){
            max = Math.max(max, this.array[i]);
            i += 1;
        }

        return max;
    }

    /**
     * Time Complexity: o(n)
     * Space Complexity: o(n)
     * @param {Array} 
     * @returns {Array} 
     */

    intersect(arr){
        this.array.sort((a, b) => a - b);
        arr.sort((a, b) => a - b);

        let i = 0;
        let j = 0;
        let index = 0;

        let result = [];
        while( i < this.array.length && j < arr.length){

            if(this.array[i] === arr[j]){
                result[index] = arr[j];
                index += 1;
                i += 1;
                j += 1;
            }
            else if(this.array[i] < arr[j])
                i += 1
            else if (this.array[i] > arr[j])
                j += 1;
            
        }

        return result;
    }


    /**
     * Time Complexity: o(n)
     * Space Complexity: o(n)
     * @returns {Array}
     */
    reverse(){
        let reversed = [];
        let index = 0;
        for(let i = this.array.length -1 ; i > -1; i--){
            reversed[index] = this.array[i];
            index += 1;
        }

        return reversed;
    }


    /**
     * Time Complexity: o(n)
     * Space Complexity: o(1)
     * @returns {Array}
     */
    reverse1(){
        let start = 0;
        let end = this.array.length - 1;

        while(start < end){
            [this.array[start], this.array[end]] = [this.array[end], this.array[start]];
            start += 1;
            end -= 1;
        }

        return this.array;
    }


    /**
     * Time Complexity: o(n)
     * Space Complexity: o(n)
     * @param {Integer} index 
     * @param {Integer} element
     * @returns {Array}
     */
    insertAt(index, element){
        if(index < 0 || index > this.current){
            throw Error('illegal argument value')
        }
        let temp = this.array[index];
        this.array[index] = element;
        
        
        while(index + 1 <= this.current){
            let temp2 = this.array[index + 1]
            this.array[index + 1] = temp;
            temp = temp2;
            index += 1
        }
        this.current += 1;
    }
}

let a = new ExtendedArray(3);
console.log('inserting 1', a.insert(1));
console.log('inserting 2', a.insert(2));
console.log('inserting 3', a.insert(3));
console.log('inserting 4', a.insert(4));
console.log('max value', a.max())
console.log('reverse', a.reverse())
console.log('reverse', a.reverse1())
console.log('insert at index 2, value 6', a.insertAt(2,6))
console.log('intersects ', a.intersect([2,4,5,7]))
a.print()

