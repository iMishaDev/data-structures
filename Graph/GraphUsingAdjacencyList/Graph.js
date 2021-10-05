class Graph {
    constructor(n){
        this.numOfVertices = n;
        this.adjacent = new Map();
    }

    addVertex(v){
        this.adjacent.set(v, []);
    }
    addEdge(v1, v2){
        this.adjacent.get(v1).push(v2);
        this.adjacent.get(v2).push(v1);
    }

    bfs(node){
        let queue = [node];
        let visited = {};
        visited[node] = 1;
        
        while(queue.length){
            let node = queue.shift();
            console.log(node);
            for( const neighbor of this.adjacent.get(node)){
                if(!visited[neighbor]){
                    queue.push(neighbor)
                    visited[neighbor] = 1;
                }
            }
        }
        
    }


    bfs_rec(node){
        let queue = [node];
        let visited = {};
        return this.#bfs_helper(queue, visited)
    }

    #bfs_helper(queue, visited){

        if(!queue.length)
            return;
        
        let node = queue.shift()
        console.log(node);

        for(const neighbor of this.adjacent.get(node)){
            if(!visited[neighbor]){
                visited[neighbor] = 1;
                queue.push(neighbor);
            }
        }
        this.#bfs_helper(queue, visited)
    }

    dfs(node){
        let stack = [node];
        let visited = {};
        visited[node] = 1;


        while(stack.length){
            let node = stack.pop();
            console.log(node)
            
            for(const neighbor of this.adjacent.get(node).reverse()){
                if(!visited[neighbor]){
                    stack.push(neighbor)
                    visited[neighbor] = 1;
                }
            }


        }

    }


    dfs_rec(node){
        let visited = {};
        return this.#dfs_helper(node, visited);
    }


    #dfs_helper(node, visited){
        if(!visited[node])
            visited[node] = 1;
        
        console.log(node);


        for(const neighbor of this.adjacent.get(node)){
            if(!visited[neighbor]){
                this.#dfs_helper(neighbor, visited)
            }
        }
    }


    print(){
        let vertices = this.adjacent.keys();
        
        for (const vertex of vertices ){
            console.log(vertex)

            for(const neighbor of this.adjacent.get(vertex)){
                console.log(neighbor)
            }
        }
    }
}

let g = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// g.print();

g.bfs('A');
console.log('\n')

// g.dfs('A');

// g.dfs_rec('A');

g.bfs_rec('A');