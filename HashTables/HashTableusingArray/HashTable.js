class HashTable {
    constructor(){
        this.table = new Array(120);
        this.size = 0;
    }

    #hash(key){
        let hash = 0;
        for(const letter of key){
            hash += letter.charCodeAt()
        }

        return hash % this.table.length;
    }


    set(key, value){
        let index = this.#hash(key);
        if(this.table[index] && this.table[index].length){
            for(let i = 0;i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] = value;
                    return;
                }
            }

            this.table[index].push([key, value]);

        } else {
            this.table[index] = [[key, value]];
        }
        this.size += 1;
    }

    get(key){
        let index = this.#hash(key);
        if(this.table[index] && this.table[index].length){
            for(let i = 0;i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1];
                }
            }

            return undefined;

        } else {
            return undefined;
        }
    }

    remove(key){
        let index = this.#hash(key);
        if(this.table[index] && this.table[index].length){
            for(let i = 0;i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    this.size -= 1;
                    return true;
                }
            }

            return false;

        } else {
            return false;
        }
    }

}