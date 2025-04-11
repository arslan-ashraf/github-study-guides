// incomplete

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
	int value;
	struct Node *left;
	struct Node *right;
	int height;
} Node;


Node *avl_insert(Node *, int);
Node *avl_remove(Node *, int);
Node *rotate_left(Node *);
Node *rotate_right(Node *);
int max(int a, int b);
int get_height(Node *);
int set_height(Node *);
int get_min_value(Node *);
void inorder_traversal(Node *);
void preorder_traversal(Node *);

Node *avl_insert(Node *avl_tree, int value){
	if (!avl_tree){
		Node *new_node = (Node *)malloc(sizeof(Node));
		if (new_node == NULL){
			printf("failed to create a new node\n");
			exit(EXIT_FAILURE);
		}
		new_node->value = value;
		new_node->height = 1;
		return new_node;
	}

	if (avl_tree->value > value){
		avl_tree->left = avl_insert(avl_tree->left, value);
	} else {
		avl_tree->right = avl_insert(avl_tree->right, value);
	}
	int balance = get_height(avl_tree->left) - get_height(avl_tree->right);
	// negative balance indicates fewer nodes on the left subavl_tree than 
	// right subavl_tree, so the right side is out of balance
	if (balance < -1){
		// now is the imbalance of too many nodes due to there
		// being a node to the avl_tree.right.right side or avl_tree.right.left side
		if (get_height(avl_tree->right->right) >= get_height(avl_tree->right->left)){
			avl_tree = rotate_left(avl_tree);
		} else {
			avl_tree->right = rotate_right(avl_tree->right);
			avl_tree = rotate_left(avl_tree);
		}
	} else if (balance > 1){
		if (get_height(avl_tree->left->left) >= get_height(avl_tree->left->right)){
			avl_tree = rotate_right(avl_tree);
		} else {
			avl_tree->left = rotate_left(avl_tree->left);
			avl_tree = rotate_right(avl_tree);
		}
	} else {
		avl_tree->height = set_height(avl_tree);
	}
	return avl_tree;
}


Node *avl_remove(Node *avl_tree, int value){
	if (!avl_tree) return NULL;
	if (!avl_tree->left && !avl_tree->right) return NULL;
	if (!avl_tree->left) return avl_tree->right;
	if (!avl_tree->right) return avl_tree-> left;
	if (avl_tree->value == value){
		int temp = get_min_value(avl_tree->right);
		avl_tree->value = temp;
		avl_tree->right = avl_remove(avl_tree->right, temp);
	} else if (avl_tree->value > value){
		avl_tree->left = avl_remove(avl_tree->left, value);
	} else {
		avl_tree->right = avl_remove(avl_tree->right, value);
	}
	return avl_tree;
}


Node *rotate_left(Node *avl_tree){
	Node *right_subtree = avl_tree->right;
	avl_tree->right = avl_tree->right->left;
	right_subtree->left = avl_tree;
	avl_tree->height = set_height(avl_tree);
	right_subtree->height = set_height(right_subtree);
	return right_subtree;
}


Node *rotate_right(Node *avl_tree){
	Node *left_subtree = avl_tree->left;
	avl_tree->left = avl_tree->left->right;
	left_subtree->right = avl_tree;
	avl_tree->height = set_height(avl_tree);
	left_subtree->height = set_height(left_subtree);
	return left_subtree;
}

int max(int a, int b){
    return (a > b) ? a : b;
}


int get_height(Node *avl_tree){
	return avl_tree ? avl_tree->height : 0;
}


int set_height(Node *avl_tree){
	int left_height = avl_tree->left ? avl_tree->left->height : 0;
	int right_height = avl_tree->right ? avl_tree->right->height : 0;
	return max(left_height, right_height) + 1;
}


int get_min_value(Node *avl_tree){
	if (!avl_tree){
		printf("tree is null\n");
		exit(EXIT_FAILURE);
	}
	if (!avl_tree->left) return avl_tree->value;
	while(avl_tree->left){
		avl_tree = avl_tree->left;
	}
	return avl_tree->value;
}


void inorder_traversal(Node *avl_tree){
	if (!avl_tree) return;
	inorder_traversal(avl_tree->left);
	printf("%d ", avl_tree->value);
	inorder_traversal(avl_tree->right);
}


void preorder_traversal(Node *avl_tree){
	if (!avl_tree) return;
	printf("%d ", avl_tree->value);
	preorder_traversal(avl_tree->left);
	preorder_traversal(avl_tree->right);
}


int main(){

    Node *avl_tree;
	avl_tree = avl_insert(avl_tree, 10);
	avl_tree = avl_insert(avl_tree, 9);
	avl_tree = avl_insert(avl_tree, 8);
	avl_tree = avl_insert(avl_tree, 1);
	avl_tree = avl_insert(avl_tree, 2);
	avl_tree = avl_insert(avl_tree, 3);
	avl_tree = avl_insert(avl_tree, 4);
	avl_tree = avl_insert(avl_tree, 5);
	avl_tree = avl_insert(avl_tree, 6);
	avl_tree = avl_insert(avl_tree, 7);
	avl_tree = avl_insert(avl_tree, 0);

	// inorder_traversal(avl_tree);
	// preorder_traversal(avl_tree);

    return 0;
}