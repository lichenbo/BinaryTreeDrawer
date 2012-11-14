function draw(){
	ocanvas = document.getElementById("MyCanvas");
	ocanvas.width = Math.abs(leftmost(root,0)) + rightmost(root,0) + rightmostlabel(root).length*7 + 30;
	ocanvas.height = 30 + 30*getlevel(root,0);
	drawpoint(root,-leftmost(root,0)+15,10);
	var oImgPNG = Canvas2Image.saveAsPNG(ocanvas,true);
	oImgPNG.id="canvasimage";
	oImgPNG.style.border = ocanvas.style.border;
	ocanvas.parentNode.replaceChild(oImgPNG,ocanvas);
}
function leftmost(p,x) {
	if(p.left==null) {
		return x;
	}
	else {
		return leftmost(p.left,x-childcount(p)*10);
	}
}
function rightmost(p,x) {
	if (p.right==null) {
		return x;
	}
	else {
		return rightmost(p.right,x+childcount(p)*10);
	}
}
function rightmostlabel(p) {
	if(p.right==null) {
		return p.value;
	}
	else {
		return rightmostlabel(p.right);
	}

}
function getlevel(p,l) {
	if(p.left!=null && p.right!=null) {
		return max(getlevel(p.left,l+1),getlevel(p.right,l+1));
	}
	if(p.left == null && p.right == null) {
		return l;
	}
	if(p.left == null){
		return getlevel(p.right,l+1);
	}
	if(p.right == null){
		return getlevel(p.left,l+1);
	}
}
function drawpoint(p,x,y) {
	drawdot(x,y,3.0);
	drawlabel(x+5,y,p.value);
	if(p.left!=null){
		drawleft(p,x,y);
	}
	if(p.right!=null) {
		drawright(p,x,y);
	}
}
function drawleft(p,x,y) {
	drawline(x,y,x-childcount(p)*10,y+30);
	drawpoint(p.left,x-childcount(p)*10,y+30);
}
function drawright(p,x,y) {
	drawline(x,y,x+childcount(p)*10,y+30);
	drawpoint(p.right,x+childcount(p)*10,y+30);
}
function childcount(p) {
	var count = 1;
	if(p.left!=null) {
		count = count + childcount(p.left);}
	if(p.right!= null) {
		count = count + childcount(p.right);
	}
	return count;
}
function max(i,j) {
	if (i > j) {
		return i;
	}
	return j;
}
