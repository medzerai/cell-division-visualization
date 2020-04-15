var cells =[];
var cellA;
var cellB;
//var r;
var nb = 2;
var s;
function setup() {
	createCanvas(800 ,550);
	//frameRate(100);
	s= createSlider(0 , 255 ,5);
	nb =prompt("number of cells :");
	for(var i =0 ; i < nb ;i++){
		cells.push(new Cell());
	}
	

	
}

function draw() {
	background(s.value());
	for(var i =0 ; i < cells.length ;i++){
		cells[i].move();
		cells[i].show();
	}
	
}
function mousePressed() {
	for(var i = cells.length-1 ; i >= 0  ;i--){
		if(cells[i].clicked(mouseX ,mouseY)){
			//console.log("clickedddddd");
			
			cells.push(cells[i].myt());
			cells.push(cells[i].myt());
			cells.splice(i ,1);
		}
	}
}
