function detect_cycle_in_graph(graph, start_vertex){
	let visit_status = {} // 0 = unvisited, 1 = visiting, 2 = visited
	// set visit status of all vertices to unvisited (or 0)
	for (let vertex in graph){
		visit_status[vertex] = 0
	}
	let cycle_detected = dfs(graph, start_vertex, visit_status)
	return cycle_detected
}

function dfs(graph, vertex, visit_status){
	visit_status[vertex] = 1
	for (let neighbor in graph[vertex]){
		// do not revisit already visited vertices and paths
		if (visit_status[vertex] == 2) continue 
		// found path which returns to a currently visiting vertex
		if (visit_status[neighbor] == 1) return true
		return dfs(graph, neighbor, visit_status)
	}
	visit_status[vertex] = 2
	return false
}

let cyclic_graph = {
	"A": { "B": 3, "D": 1, "F": 5},
	"B": { "C": 4},
	"C": { "E": 3 },
	"D": { "B": 1, "F": 2, "G": 5 },
	"E": { "G": 5, "J": 2 },
	"F": { "M": 1 },
	"G": { "H": 2, "I": 1 },
	"H": { "I": 3, "K": 4 },
	"I": { "E": 4, "J": 4, "L": 2 },
	"J": {},
	"K": {},
	"L": {},
	"M": { "K": 6 }
}

// start vertex "A" is arbitrary and for convenience
console.log(detect_cycle_in_graph(cyclic_graph, "A"))