function buildTree(strtree) {
	i = 0;
	root = new Node();
	processEvaluation(root,strtree);
}
function Node() {
	this.value = null;
	this.left = null;
	this.right = null;
}

function processEvaluation(n,strtree) {
	if (i == strtree.length) {
		return null;
	}
	if (strtree.charAt(i) == '(') {
		if (strtree.charAt(i+1) == ')') {
			i = i + 2;
			return null;
		}
		var node = new Node();
		i = i + 1;
		processEvaluation(node,strtree);
		i = i + 1;
		return node;
	}
	if (strtree.charAt(i) == ')') {
		i = i + 1;
		return null;
	}
	else {
		n.value = strtree.charAt(i);
		i = i + 1;
		while (strtree.charAt(i) != '(' && strtree.charAt(i) != ')') {
		n.value = n.value.concat(strtree.charAt(i));
		i = i + 1;
		}
		n.left = processEvaluation(n,strtree);
		n.right = processEvaluation(n,strtree);
		return null;
	}
}
function preorder(n) {
	document.write(n.value);
	if(n.left != null) {
		preorder(n.left);
	}
	if (n.right != null) {
		preorder(n.right);
	}
}
function preorder_new(n) {
	document.write(n.value);
	if(n.left != null) {
		preorder(n.left);
	}
	else {
	document.write("@");
	}
	if (n.right != null) {
		preorder(n.right);
	}
	else {
	document.write("@");
	}

}
function inorder(n) {
	if(n.left != null) {
		inorder(n.left);
	}
	document.write(n.value);
	if(n.right != null) {
		inorder(n.right);
	}
	
}
function postorder(n) {
	if(n.left != null) {
		postorder(n.left);
	}
	if(n.right != null) {
		postorder(n.right);
	}
	document.write(n.value);
}
