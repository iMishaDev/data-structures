/**
 * using Kosaraju's Algorithm to find the strongly connected vertices
 */

class Graph {
    constructor(n){
        this.numOfVertices = n;
        this.adjacent = new Map();
    }

    addVertex(v){
        this.adjacent.set(v, []);
    }
    addEdge(v1, v2){
        if(!this.adjacent.get(v1)){
            this.addVertex(v1)
            this.adjacent.get(v1).push(v2)
        } else this.adjacent.get(v1).push(v2);
    }

    dfs_rec(node){
        return this.dfs_rec_helper(vertex, {})
    }

    dfs_rec_helper(vertex, visited){
        visited[vertex] = 1
        console.log(vertex)
        for ( const neighbor of this.adjacent.get(vertex)){
            if(!visited[neighbor])
                this.dfs_rec_helper(neighbor, visited)
        }
    }

    fill_order(vertex, payload){
        payload.visited[vertex] = 1
        for ( const neighbor of this.adjacent.get(vertex)){
            if(!payload.visited[neighbor])
                this.fill_order(neighbor,  payload)
        }
        payload.stack.push(vertex)

    }

    reverse(){
        let graph = new Graph(this.numOfVertices);
        for (const vertex  of this.adjacent ){
            let [v, neighbors] = vertex;
            for ( const neighbor of neighbors){
                graph.addEdge(neighbor, v)
            }
        }
            
        return graph;
    }


    getStronglyConnectedVertices(){
        /*
        why payload ? 
            because i need a reference of the stack so i can use it later in dfs. 
            and the only way to have an actual reference in javascript is by using objects.
        */
        let payload = {stack: [], visited:{}}

        for (const vertex of this.adjacent){
            if(!payload.visited[vertex[0]])
                this.fill_order(vertex[0], payload)
        }


        let reversedGraph = this.reverse()
        let visited = {}
        while (payload.stack.length){
            let vertex = payload.stack.pop()
            if (!visited[vertex]){
                reversedGraph.dfs_rec_helper(vertex, visited)
                console.log('---------')
            }
        }
    }
}

let g = new Graph(8);
let vertices = [ '0', '1', '2', '3', '4', '5', '6', '7' ];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('0', '1');
g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '0');

g.addEdge('2', '4');

g.addEdge('4', '5');
g.addEdge('5', '6');
g.addEdge('6', '4');

g.addEdge('6', '7');
// console.log(g)

g.getStronglyConnectedVertices()
/**
ref: https://www.programiz.com/dsa/strongly-connected-components
 */