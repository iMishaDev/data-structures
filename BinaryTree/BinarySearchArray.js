
class BinarySearchArray {



/**
 * @constructor 
 * @param {Array} list
 */

    constructor(list=[]){
        this.list = list
    }

/**
 * @search Search 
 * @param {number} target the value of the node we are searching fo
 * Algorithm Inorder(tree)
 * 1. check if the target value is larger, lower or equal to the root value 
 * 2. if target is lower, go left. if it's larger, go right.
 * 3. recursion until it finds the value or else returns null 
 */

    search_recursion(target, low=0, high=this.list.length-1, data=this.list){
        if(high < low)
            return -1;
        
        let mid =  Math.floor((high + low) / 2)

        if(target === data[mid]) return mid;
        else if(target < data[mid]) return this.search_recursion(target, 0, mid)
        else return this.search_recursion(target, mid + 1, data.length - 1)
    }


    search_iterative(target, data=this.list){
        let low = 0;
        let high = data.length - 1;
        let mid = 0;

        while(low <= high){
            mid = Math.floor((low + high) / 2)
            if(data[mid] == target)
                return data[mid]
            else if(target < data[mid]){
                high = mid - 1;
            } else if(target > data[mid]){
                low = mid + 1;
            }
        }
        return -1 

    }
}


let tree = new BinarySearchArray([0,1,3,5,7,8,18,20,24]);
console.log('Searching for 20 ', tree.search_recursion(20))
console.log('Searching for 1 ', tree.search_recursion(1))
console.log('Searching for 0 ', tree.search_recursion(0))
console.log('Searching for 100 ', tree.search_recursion(100))
console.log('--------------')
console.log('Searching for 20 ', tree.search_iterative(20))
console.log('Searching for 1 ', tree.search_iterative(1))
console.log('Searching for 0 ', tree.search_iterative(0))
console.log('Searching for 100 ', tree.search_iterative(100))


