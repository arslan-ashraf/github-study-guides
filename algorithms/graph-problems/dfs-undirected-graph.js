function depth_first_search(graph, start_vertex){
	let dfs_result = []
	let visited = new Set()
	dfs_backtrack(graph, start_vertex, visited, dfs_result)
	return dfs_result
}

function dfs_backtrack(graph, current_vertex, visited, dfs_result){
	if (visited.has(current_vertex)) return
	dfs_result.push(current_vertex)
	visited.add(current_vertex)
	for (let neighbor in graph[current_vertex]){
		dfs_backtrack(graph, neighbor, visited, dfs_result)
	}
}

let graph = {
	"A": { "B": 3, "D": 1, "F": 5},
	"B": { "A": 3, "D": 1, "C": 4},
	"C": { "B": 4, "E": 3 },
	"D": { "A": 1, "B": 1, "F": 2, "G": 5 },
	"E": { "C": 3, "J": 2, "G": 5 },
	"F": { "A": 5, "D": 2, "M": 1 },
	"G": { "D": 5, "E": 5, "H": 2, "I": 1 },
	"H": { "G": 2, "I": 3, "K": 4 },
	"I": { "G": 1, "H": 3, "J": 4, "L": 2 },
	"J": { "E": 2, "I": 4 },
	"K": { "H": 4, "M": 6 },
	"L": { "I": 2 },
	"M": { "F": 1, "K": 6 }
}


console.log(depth_first_search(graph, "A"))