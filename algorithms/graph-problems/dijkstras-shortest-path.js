function fake_min_heap(arr){
	// sort in descending order for quick pop
	arr.sort((a, b) => b[1] - a[1])
}

function dijkstras_shortest_path(graph, start_node) {
	
	// distances stores the shortest path from start node to all other nodes
	let distances = {}

	// a map to keep tract of all visited nodes
	let visited = {}

	// a map to keep track of which node was visited from which node
	let visited_from = {}

	// set the initial distance of every node from start node to infinity
	for (let node in graph) {
		distances[node] = 1/0
		visited[node] = false
		visited_from[node] = null
	}

	distances[start_node] = 0
	visited_from[start_node] = start_node

	let min_heap = [[start_node, 0]]

	while (min_heap.length > 0) {

		let min_heap_top = min_heap.pop()
		let current_node = min_heap_top[0]
		let current_node_distance = min_heap_top[1]
		visited[current_node] = true
		
		for (let neighbor in graph[current_node]){

			let neighbors_distance_to_current_node = graph[current_node][neighbor]
			let total_distance = current_node_distance + neighbors_distance_to_current_node

			if (!visited[neighbor] && total_distance < distances[neighbor]){
				min_heap.push([neighbor, total_distance])
				distances[neighbor] = total_distance
				visited_from[neighbor] = current_node
			}
		}

		fake_min_heap(min_heap)

	}

	console.log("minimum distances\n", distances)
	console.log("nodes visited from\n", visited_from)
	return [distances, visited_from]
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

console.log(dijkstras_shortest_path(graph, "A"))