// note the start vertex is arbitrary and for convenience

function topological_sort(graph, start_vertex){
	let visited_set = new Set()
	let stack = []

	for (let vertex in graph) {
		if (!visited_set.has(vertex)) {
		  dfs(vertex, visited_set, stack)
		}
	}
  return stack.reverse()
}

function dfs(vertex, visited_set, stack){
    visited_set.add(vertex)

    for (let neighbor in graph[vertex]) {
		if (!visited_set.has(neighbor)) {
			dfs(neighbor, visited_set, stack)
		}
    }
    stack.push(vertex)
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

// returns ['A', 'D', 'F', 'M', 'B', 'C', 'E', 'G', 'H', 'K', 'I', 'L', 'J']
let result = topological_sort(graph, "A")
console.log(result)