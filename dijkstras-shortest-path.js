function find_shortest_path(graph, start) {
	const distances = {}
	const visited = {}
	const previous = {}

	for (const node in graph) {
		distances[node] = 1/0
		visited[node] = false
	}

	distances[start] = 0

	while (true) {
		let closestNode = null
		let closestDistance = Infinity

		for (const node in graph) {
			if (!visited[node] && distances[node] < closestDistance) {
				closestNode = node
				closestDistance = distances[node]
			}
		}

		if (closestNode === null) {
			break
		}

		visited[closestNode] = true

		for (const neighbor in graph[closestNode]) {
			const distance = distances[closestNode] + graph[closestNode][neighbor]
			if (distance < distances[neighbor]) {
				distances[neighbor] = distance
				previous[neighbor] = closestNode
			}
		}
	}
	return { distances, previous }
}