function simplify_directory_path(path){
	path = path.split("/")
	let result = ""
	let stack = []
	for(let i = 0; i < path.length; i++){
		if (stack.length > 0 && path[i] == ".."){
			stack.pop()
		} else if (path[i] != "" && path[i] != "." && path[i] != ".."){
			stack.push(path[i])
		}
	}

	stack.reverse()
	while(stack.length > 0){
		result += "/" + stack.pop()
	}
	return result
}

console.log(simplify_directory_path("/a/./b/c/../../d") == "/a/d")