function fake_min_heap(arr){
	// sorts array in descending order so the minimum element
	// is at the end of the array, this is done for a quick pop()
	arr.sort((a, b) => b[1] - a[1])
}

function dijkstras_shortest_path(graph, start_vertex) {
	
	// distances stores the shortest path from start vertex to all other vertexs
	let distances = {}

	// a map to keep tract of all visited vertexs
	let visited = {}

	// a map to keep track of which vertex was visited from which vertex
	let visited_from = {}

	// set the initial distance of every vertex from start vertex to infinity
	for (let vertex in graph) {
		distances[vertex] = 1/0
		visited[vertex] = false
		visited_from[vertex] = null
	}

	distances[start_vertex] = 0
	visited_from[start_vertex] = start_vertex

	let min_heap = [[start_vertex, 0]]

	while (min_heap.length > 0) {

		let min_heap_top = min_heap.pop()
		let current_vertex = min_heap_top[0]
		// distance_to_current_vertex is the total distance to get to 
		// the current vertex from the starting vertex
		let distance_to_current_vertex = min_heap_top[1]
		visited[current_vertex] = true
		
		for (let neighbor in graph[current_vertex]){

			let neighbors_distance_to_current_vertex = graph[current_vertex][neighbor]
			let total_distance = distance_to_current_vertex + neighbors_distance_to_current_vertex

			if (!visited[neighbor] && total_distance < distances[neighbor]){
				min_heap.push([neighbor, total_distance])
				distances[neighbor] = total_distance
				visited_from[neighbor] = current_vertex
			}
		}

		fake_min_heap(min_heap)

	}

	console.log("minimum distances\n", distances)
	console.log("vertexs visited from\n", visited_from)
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