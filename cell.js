function Cell( p2 , r2 , c2){
	if(p2){
		this.pos = p2.copy()
	}else{
		this.pos = createVector(random(width) , random(height));
	}
	
	this.r=r2 || 60;
	this.a = 100;
	this.c =c2 || createVector(random(0 , 255) , random(0 , 255) , random(0 , 255));
	this.move = function(){
		var val =p5.Vector.random2D();
		this.pos.add(val);
	}

	this.show = function(){
		
		noStroke();
		fill(this.c.x ,this.c.y , this.c.z , this.a);
		ellipse(this.pos.x , this.pos.y , this.r , this.r);
	}
	this.clicked = function(x,y){
		var d =dist(this.pos.x ,this.pos.y , x , y);
		if(d < this.r){
			return true;

		}else{
			return false;
		}
	}
	this.myt =function(){
		var cell = new Cell(this.pos ,this.r * 0.8 , this.c);
		return cell;

	}	

}