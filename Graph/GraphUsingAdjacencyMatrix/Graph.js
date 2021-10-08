class Graph {
    constructor(n){
        this.numOfVertices = n;
        this.matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    }

    addEdge(v1, v2){
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1;
    }

    removeEdge(v1, v2){
        this.matrix[v1][v2] = 0;
        this.matrix[v2][v1] = 0;
    }
    
}


const graph = new Graph(4);
graph.addEdge(0, 3)
graph.addEdge(1, 3)
graph.addEdge(2, 2)
graph.addEdge(1, 2)
console.log(graph.matrix)
graph.removeEdge(1, 2)
console.log(graph.matrix)