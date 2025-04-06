#include <stdio.h>
#include <stdlib.h>

typedef struct {
	int value;
	struct Node *left;
	struct Node *right;
	int height;
} Node;

typedef struct AVL_Tree {
	Node* (*insert)(Node *, int);
	Node* (*remove)(Node *, int);
	Node* (*rotate_left)(Node *);
	Node* (*rotate_right)(Node *);
	int (*get_height)(Node *);
	int (*set_height)(Node *);
	int (*get_min)(Node *);
	void (*inorder_traversal)(Node *);
	void (*preorder_traversal)(Node *);
} AVL_Tree;

Node* insert(Node *tree, int value){
	if (!tree){
		Node *new_node = (Node *)malloc(sizeof(Node));
		if (new_node == NULL){
			printf("failed to create a new node\n");
			exit(EXIT_FAILURE);
		}
		new_node->value = value;
		new_node->height = 1;
		return new_node;
	}

	if (tree.value > value){
		tree->left = insert(tree->left, value);
	} else {
		tree->right = insert(tree->right, value);
	}
	int balance = get_height(tree->left) - get_height(tree->right);
	// negative balance indicates fewer nodes on the left subtree than 
	// right subtree, so the right side is out of balance
	if (balance < -1){
		// now is the imbalance of too many nodes due to there
		// being a node to the tree.right.right side or tree.right.left side
		if (get_height(tree->right->right) >= get_height(tree->right->left)){
			tree = rotate_left(tree);
		} else {
			tree->right = rotate_right(tree->right);
			tree = rotate_left(tree);
		}
	} else if (balance > 1){
		if (get_height(tree->left->left) >= get_height(tree->left->right)){
			tree = rotate_right(tree);
		} else {
			tree->left = rotate_left(tree->left);
			tree = rotate_right(tree);
		}
	} else {
		tree->height = set_height(tree);
	}
	return tree;
}

Node* remove(Node *tree, int value){
	if (!tree) return NULL;
	if (!tree->left && !tree->right) return NULL;
	if (!tree->left) return tree->right;
	if (!tree->right) return tree-> left;
	if (tree->value == value){
		int temp = get_min(tree->right);
		tree->value = temp;
		tree->right = remove(tree->right, temp);
	} else if (tree->value > value){
		tree->left = remove(tree->left, value);
	} else {
		tree->right = remove(tree->right, value);
	}
	return tree;
}