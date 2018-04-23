var h = 50;
var w = 50;
var center = view.center;
var width = view.size.width;
var height = view.size.height;
var path = new Path();
var mousePos = view.center / 2;
var pathHeight = mousePos.y;

path.strokeColor = 'black';
path.add(new Point(center.x - w,center.y + h)); 
path.add(new Point(center.x + w,center.y + h)); 
path.add(new Point(center.x + w,center.y - h));
path.add(new Point(center.x - w,center.y - h));
path.closed = true;

// Select the path, so we can see its handles:
path.fullySelected = false;

// Create a copy of the path and move it 100pt to the right:
// var copy = path.clone();
path.fullySelected = false;
path.fillColor = "Black";

// Smooth the segments of the copy:
path.smooth();

function onFrame(event) {

	for (var i = 1; i < 4; i++) {

	var sinSeed = event.count + (i + i % 10) * 50;
	var sinHeight = Math.sin(sinSeed / 200) * 50;
	var yPos = Math.sin(sinSeed / 400) * sinHeight * Math.random() * 0.08;
	path.segments[i].point.y += yPos;
	

	}

	path.rotate(0.03);



}

