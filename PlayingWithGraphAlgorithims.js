function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    // this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
  this.edgeTo = [];
  this.hasPathTo = hasPathTo;
  this.pathTo = pathTo;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log('Vertex: ' + i);
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        console.log('\tEdge -> ' + this.adj[i][j]);
    }
    console.log('\n');
  }
}

// Depth_First Search Function
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: " + v);
  }
  for (var w of this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}

// Breadth-First Search Function
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v != undefined) {
      console.log("Visited vertex: " + v);
    }
    for (var w of this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

function run() {
  g = new Graph(5);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 4);
  // g.showGraph();
  // g.dfs(0);
  // g.bfs(2);
}

// Shortest Path
function Graph() {
  var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.

  this.addEdge = function (u, v) {
    if (neighbors[u] === undefined) {  // Add the edge u -> v.
      neighbors[u] = [];
    }
    neighbors[u].push(v);
    if (neighbors[v] === undefined) {  // Also add the edge v -> u in order
      neighbors[v] = [];               // to implement an undirected graph.
    }                                  // For a directed graph, delete
    neighbors[v].push(u);              // these four lines.
  };

  return this;
}

function bfs(graph, source) {
  var queue = [{ vertex: source, count: 0 }],
    visited = { source: true },
    tail = 0;
  while (tail < queue.length) {
    var u = queue[tail].vertex,
      count = queue[tail++].count;  // Pop a vertex off the queue.
    console.log('distance from ' + source + ' to ' + u + ': ' + count);
    graph.neighbors[u].forEach(function (v) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count + 1 });
      }
    });
  }
}

function shortestPath(graph, source, target) {
  if (source == target) {   // Delete these four lines if
    console.log(source);  // you want to look for a cycle
    return;                 // when the source is equal to
  }                         // the target.
  var queue = [source],
    visited = { source: true },
    predecessor = {},
    tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++],  // Pop a vertex off the queue.
      neighbors = graph.neighbors[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {   // Check if the path is complete.
        var path = [v];   // If so, backtrack through the path.
        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();
        console.log(path.join(' -> '));
        return;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
  console.log('there is no path from ' + source + ' to ' + target);
}

function run() {
  var graph = new Graph();
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('B', 'E');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');

  // bfs(graph, 'A');
  // console.log();
  shortestPath(graph, 'B', 'G');
  console.log();
  shortestPath(graph, 'G', 'A');

  g.vertexList = ["CS1", "CS2", "Data Structures",
    "Assembly Language", "Operating Systems",
    "Algorithms"];
  g.showGraph();
  g.topSort();
};

// TopSort Function
function topSort() {
  var stack = [];
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  for (var i = 0; i < this.vertices; i++) {
    if (visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] != undefined && stack[i] != false) {
      console.log(this.vertexList[stack[i]]);
    }
  }
}

// TopSortHelper Function
function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for (var w of this.adj[v]) {
    if (!visited[w]) {
      this.topSortHelper(visited[w], visited, stack);
    }
  }
  stack.push(v);
}