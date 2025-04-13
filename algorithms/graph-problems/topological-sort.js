function topological_sort(graph, start_vertex){
	let visited = new Set()
	let stack = []

	for (let node in graph) {
		if (!visited.has(node)) {
		  dfs(node)
		}
	}
  return stack.reverse()
}

function dfs(node) {
    visited.add(node)

    for (let neighbor of graph[node] || []) {
		if (!visited.has(neighbor)) {
		dfs(neighbor)
		}
    }
    stack.push(node)
  }

let graph = {
	"A": { "B": 3, "D": 1, "F": 5},
	"B": { "C": 4},
	"C": { "E": 3 },
	"D": { "B": 1, "F": 2, "G": 5 },
	"E": { "G": 5, "J": 2 },
	"F": { "M": 1 },
	"G": { "H": 2, "I": 1 },
	"H": { "I": 3, "K": 4 },
	"I": { "J": 4, "L": 2 },
	"J": {},
	"K": {},
	"L": {},
	"M": { "K": 6 }
}