
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

    search(target, low=0, high=this.list.length-1, data=this.list){
        if(high < low)
            return -1;
        
        let mid =  Math.floor((high + low) / 2)

        if(target === data[mid]) return mid;
        else if(target < data[mid]) return this.search(target, 0, mid)
        else return this.search(target, mid + 1, data.length - 1)
    }
}


let tree = new BinarySearchArray([0,1,3,5,7,8,18,20,24]);
console.log('Searching for 20 ', tree.search(20))
console.log('Searching for 1 ', tree.search(1))
console.log('Searching for 0 ', tree.search(0))
console.log('Searching for 100 ', tree.search(100))

